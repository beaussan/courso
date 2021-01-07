import { ActionMap } from './types';
import { gql } from 'graphql-request';
import { db, gqlClient, webBaseUrl } from '../config';
import {
  GetStudentForMailSendQuery,
  GetStudentForMailSendQueryVariables,
} from '../generated/graphql';
import * as functions from 'firebase-functions';

const GET_STUDENT_FOR_MAIL_SEND = gql`
  query getStudentForMailSend($studentIds: [uuid!]) {
    student(
      where: {
        _and: { id: { _in: $studentIds } }
        claim_token: { _is_null: false }
      }
    ) {
      email
      claim_token
      full_name
      id
    }
  }
`;

export const sendStudentClaimMail: ActionMap['sendStudentClaimMail'] = async (
  args,
) => {
  const { student } = await gqlClient.request<
    GetStudentForMailSendQuery,
    GetStudentForMailSendQueryVariables
  >(GET_STUDENT_FOR_MAIL_SEND, { studentIds: args.studentsIds });
  if (!student || student.length === 0) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'students not found.',
    );
  }
  await Promise.all(
    student.map((value) =>
      db.collection('mail').add({
        to: [value.email],
        template: {
          name: 'link',
          data: {
            full_name: value.full_name,
            claimLink: `${webBaseUrl}/links/${value.claim_token}`,
          },
        },
      }),
    ),
  );
  return {
    nmbMailSent: student.length,
  };
};

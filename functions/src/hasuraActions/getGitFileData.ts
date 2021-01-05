import { ActionFn, getGitFileDataArgs, GetGitFileDataOutput } from './types';
import { gql } from 'graphql-request';
import { gqlClient } from '../config';
import {
  GetGitInfoForStudentYieldQuery,
  GetGitInfoForStudentYieldQueryVariables,
} from '../generated/graphql';
import { https } from 'firebase-functions';
import { getFileFromGitea } from '../giteaApi';

const GET_YIELD_INFO = gql`
  query getGitInfoForStudentYield(
    $practice_to_student_yield_id: uuid!
    $practice_yield_expected_output_id: uuid!
  ) {
    studentYield: practice_to_student_yield_by_pk(
      id: $practice_to_student_yield_id
    ) {
      gitea_org_and_repo
      id
      practice_yield_id
    }
    expectedOutput: practice_yield_expected_output_by_pk(
      id: $practice_yield_expected_output_id
    ) {
      git_path
      method
      practice_yield_id
    }
  }
`;

export const getGitFileData: ActionFn<
  getGitFileDataArgs,
  GetGitFileDataOutput
> = async ({
  practice_to_student_yield_id,
  practice_yield_expected_output_id,
}) => {
  const { expectedOutput, studentYield } = await gqlClient.request<
    GetGitInfoForStudentYieldQuery,
    GetGitInfoForStudentYieldQueryVariables
  >(GET_YIELD_INFO, {
    practice_to_student_yield_id,
    practice_yield_expected_output_id,
  });

  if (!expectedOutput) {
    throw new https.HttpsError('not-found', 'Expected output not found');
  }
  if (!studentYield) {
    throw new https.HttpsError('not-found', 'Student not found');
  }
  if (studentYield.practice_yield_id !== expectedOutput.practice_yield_id) {
    throw new https.HttpsError(
      'invalid-argument',
      'Mismatch between expected output and student yield',
    );
  }

  const fileAndRepo = studentYield.gitea_org_and_repo;

  if (!fileAndRepo) {
    return null;
  }

  const fileName = expectedOutput.git_path;
  if (!fileName) {
    throw new https.HttpsError(
      'invalid-argument',
      'File name is not set on expected output',
    );
  }

  const fileData = await getFileFromGitea(fileAndRepo, fileName);

  if (fileData === null) {
    return null;
  }

  return {
    ...fileData,
    practice_to_student_yield_id,
    practice_yield_expected_output_id,
  };
};

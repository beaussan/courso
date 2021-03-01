import { ActionMap } from './types';
import { gqlSdk } from '../config';
import { https } from 'firebase-functions';
import { fetchAllCommits } from '../giteaApi';
import * as gravatar from 'gravatar-url';

const getProfilePicFromEmail = (email: string): string => {
  return gravatar(email || 'unknown@yopmail.com', { default: 'retro' });
};

export const getGitLogData: ActionMap['getGitLogData'] = async ({
  practice_to_student_yield_id,
  practice_yield_expected_output_id,
}) => {
  const {
    expectedOutput,
    studentYield,
  } = await gqlSdk.getGitInfoForStudentYield({
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

  const orgAndRepo = studentYield.gitea_org_and_repo;

  if (!orgAndRepo) {
    return [];
  }

  const commits = await fetchAllCommits(orgAndRepo);
  /*
  await Promise.all(
    commits
      .map((item) => item.commit_author_email)
      .filter((val) => val !== undefined && val !== null)
      .map((itm) => itm ?? 'none')
      .filter((value, index, array) => array.indexOf(value) !== index)
      .map(getProfilePicFromEmail),
  );
 */

  return commits.map((item) => ({
    ...item,
    author_profile_picture: getProfilePicFromEmail(
      item.commit_author_email ?? 'none',
    ),
  }));
};

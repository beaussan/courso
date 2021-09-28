import { ActionMap } from './types';
import { gqlSdk } from '@lib/gql';
import { getFileFromGitea } from '@lib/gitea/giteaApi';
import { HttpsError } from '@lib/common/HttpsError';

export const getGitFileData: ActionMap['getGitFileData'] = async ({
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
    throw new HttpsError('not-found', 'Expected output not found');
  }
  if (!studentYield) {
    throw new HttpsError('not-found', 'Student not found');
  }
  if (studentYield.practice_yield_id !== expectedOutput.practice_yield_id) {
    throw new HttpsError(
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
    throw new HttpsError(
      'invalid-argument',
      'File name is not set on expected output',
    );
  }

  const fileData = await getFileFromGitea(fileAndRepo, fileName);

  if (fileData === null) {
    return null;
  }

  return {
    practice_to_student_yield_id,
    practice_yield_expected_output_id,
    content: fileData.content,
    name: fileData.name,
    download_url: fileData.download_url,
    encoding: fileData.encoding,
    git_url: fileData.git_url,
    html_url: fileData.html_url,
    path: fileData.path,
    sha: fileData.sha,
    size: fileData.size,
    submodule_git_url: fileData.submodule_git_url,
    target: fileData.target,
    type: fileData.type,
    url: fileData.url,
  };
};

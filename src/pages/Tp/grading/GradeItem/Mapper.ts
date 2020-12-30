// GetPracticeToStudentForGradingQuery

import {
  GetPracticeToStudentForGradingQuery,
  Practice_Yield_Expected_Output,
  PracticeToStudentYieldForGradingFragment,
} from '../../../../generated/graphql';

type expectedOutput = Pick<
  Practice_Yield_Expected_Output,
  'id' | 'code_lang' | 'expected' | 'git_path' | 'method'
>;
export interface PracticeToStudentForGradingFrontEdit {
  yieldId: string;
  yieldName: string;
  expectedOutput: expectedOutput;
  gradeMetrics: Array<{
    id: string;
    name: string;
    points: number;
    feedbacks: string[];
  }>;
  studentYields: Array<PracticeToStudentYieldForGradingFragment>;
}

const mapIntoFrontInterpretationSingle = (
  input: GetPracticeToStudentForGradingQuery['practice_yield'][0],
): Array<PracticeToStudentForGradingFrontEdit> => {
  const yieldId = input.id;
  const yieldName = input.name;
  const studentYields = input.practice_to_student_yields;
  return input.practice_yield_expected_outputs.map(
    (expected): PracticeToStudentForGradingFrontEdit => ({
      yieldName,
      yieldId,
      studentYields,
      gradeMetrics: expected.practice_yield_grade_metrics,
      expectedOutput: {
        id: expected.id,
        code_lang: expected.code_lang,
        expected: expected.expected,
        git_path: expected.expected,
        method: expected.method,
      },
    }),
  );
};

export const mapIntoFrontInterpretation = (
  input: GetPracticeToStudentForGradingQuery['practice_yield'],
): Array<PracticeToStudentForGradingFrontEdit> => {
  return input
    .map(mapIntoFrontInterpretationSingle)
    .reduce((prev, curr) => [...prev, ...curr], []);
};

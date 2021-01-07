type Maybe<T> = T | null;

type uuid = string;

type SendStudentClaimMailOutput = {
  nmbMailSent: number;
};

type linkStudentToUserOutput = {
  ok: boolean;
};

type SubmitHandoffOutput = {
  status: string;
};

type FillEmptyYieldsOutput = {
  affected_rows: number;
};

type RefreshGradesOutput = {
  affected_rows: number;
};

type GetGitFileDataOutput = {
  practice_yield_expected_output_id: uuid;
  practice_to_student_yield_id: uuid;
  content: string;
  download_url: string;
  encoding: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  submodule_git_url?: Maybe<string>;
  target?: Maybe<string>;
  type: string;
  url: string;
};

type YieldForHandoff = {
  yieldId: uuid;
  value: string;
};

type getGitFileDataArgs = {
  practice_yield_expected_output_id: uuid;
  practice_to_student_yield_id: uuid;
};

type fillEmptyYieldsArgs = {
  course_id: uuid;
  practice_id: uuid;
};

type linkStudentToUserArgs = {
  linkId: uuid;
};

type refreshGradesArgs = {
  course_id: uuid;
  practice_id: uuid;
};

type sendStudentClaimMailArgs = {
  studentsIds: Array<uuid>;
};

type submitHandoffArgs = {
  practiceToPromotionId: uuid;
  yields: Array<YieldForHandoff>;
};

type Mutation = {
  fillEmptyYields?: {
    output: Maybe<FillEmptyYieldsOutput>;
    input: fillEmptyYieldsArgs;
  };
  linkStudentToUser?: {
    output: Maybe<linkStudentToUserOutput>;
    input: linkStudentToUserArgs;
  };
  refreshGrades?: {
    output: Maybe<RefreshGradesOutput>;
    input: refreshGradesArgs;
  };
  sendStudentClaimMail?: {
    output: Maybe<SendStudentClaimMailOutput>;
    input: sendStudentClaimMailArgs;
  };
  submitHandoff?: {
    output: Maybe<SubmitHandoffOutput>;
    input: submitHandoffArgs;
  };
};

type Query = {
  getGitFileData?: {
    input: getGitFileDataArgs;
    output: Maybe<GetGitFileDataOutput>;
  };
};

export type SessionVars = {
  'x-hasura-user-id': string;
  'x-hasura-role': string;
  'x-hasura-firebase-id': string;
};

type actionTypes = keyof Mutation | keyof Query;

export type PayloadRequest<T> = {
  action: {
    name: actionTypes;
  };
  input: T;
  session_variables: SessionVars;
};

export type ActionFn<Input, Output> = (
  data: Input,
  sessionVars: SessionVars,
) => Promise<Output>;

type MutationCallMap = {
  [P in keyof Required<Mutation>]: ActionFn<
    Required<Mutation>[P]['input'],
    Required<Mutation>[P]['output']
  >;
};

type QueryCallMap = {
  [P in keyof Required<Query>]: ActionFn<
    Required<Query>[P]['input'],
    Required<Query>[P]['output']
  >;
};

export type ActionMap = MutationCallMap & QueryCallMap;

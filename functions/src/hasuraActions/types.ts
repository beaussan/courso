export type Maybe<T> = T | null;

export type uuid = string;

export type jsonb = string;

export type InsertStudentAnswerOutput = {
  id: uuid;
  student_output?: Maybe<jsonb>;
};

export type SendStudentClaimMailOutput = {
  nmbMailSent: number;
};

export type linkStudentToUserOutput = {
  ok: boolean;
};

export type SubmitHandoffOutput = {
  status: string;
};

export type FillEmptyYieldsOutput = {
  affected_rows: number;
};

export type RefreshGradesOutput = {
  affected_rows: number;
};

export type GetGitFileDataOutput = {
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

export type YieldForHandoff = {
  yieldId: uuid;
  value: string;
};

export type Query = {
  getGitFileData?: Maybe<GetGitFileDataOutput>;
};

export type Mutation = {
  fillEmptyYields?: Maybe<FillEmptyYieldsOutput>;
  linkStudentToUser?: Maybe<linkStudentToUserOutput>;
  refreshGrades?: Maybe<RefreshGradesOutput>;
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  submitHandoff?: Maybe<SubmitHandoffOutput>;
};

export type getGitFileDataArgs = {
  practice_yield_expected_output_id: uuid;
  practice_to_student_yield_id: uuid;
};

export type fillEmptyYieldsArgs = {
  course_id: uuid;
  practice_id: uuid;
};

export type linkStudentToUserArgs = {
  linkId: uuid;
};

export type refreshGradesArgs = {
  course_id: uuid;
  practice_id: uuid;
};

export type sendStudentClaimMailArgs = {
  studentsIds: Array<uuid>;
};

export type submitHandoffArgs = {
  practiceToPromotionId: uuid;
  yields: Array<YieldForHandoff>;
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
) => Promise<Maybe<Output>>;

// export type ActionMap = { [key: string]: ActionFn<any, any> };
export type ActionMap = Record<actionTypes, ActionFn<any, any>>;

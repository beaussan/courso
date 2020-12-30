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

export type RefreshGradesOutput = {
  affected_rows: number;
};

export type FillEmptyYieldsOutput = {
  affected_rows: number;
};

export type YieldForHandoff = {
  yieldId: uuid;
  value: string;
};

export type Mutation = {
  fillEmptyYields?: Maybe<FillEmptyYieldsOutput>;
  linkStudentToUser?: Maybe<linkStudentToUserOutput>;
  refreshGrades?: Maybe<RefreshGradesOutput>;
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  submitHandoff?: Maybe<SubmitHandoffOutput>;
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

export type PayloadRequest<T> = {
  action: {
    name: keyof Mutation;
  };
  input: T;
  session_variables: SessionVars;
};

export type ActionFn<Input, Output> = (
  data: Input,
  sessionVars: SessionVars,
) => Promise<Output>;

// export type ActionMap = { [key: string]: ActionFn<any, any> };
export type ActionMap = Record<keyof Mutation, ActionFn<any, any>>;

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type InsertStudentAnswerOutput = {
  __typename?: 'InsertStudentAnswerOutput';
  id: Scalars['uuid'];
  student_output?: Maybe<Scalars['jsonb']>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type SendStudentClaimMailOutput = {
  __typename?: 'SendStudentClaimMailOutput';
  nmbMailSent: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SubmitHandoffOutput = {
  __typename?: 'SubmitHandoffOutput';
  status: Scalars['String'];
};

export type YieldForHandoff = {
  value: Scalars['String'];
  yieldId: Scalars['uuid'];
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type LinkStudentToUserOutput = {
  __typename?: 'linkStudentToUserOutput';
  ok: Scalars['Boolean'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user" */
  deleteUser?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "practice" */
  delete_practice?: Maybe<Practice_Mutation_Response>;
  /** delete single row from the table: "practice" */
  delete_practice_by_pk?: Maybe<Practice>;
  /** delete data from the table: "practice_to_promotion" */
  delete_practice_to_promotion?: Maybe<Practice_To_Promotion_Mutation_Response>;
  /** delete single row from the table: "practice_to_promotion" */
  delete_practice_to_promotion_by_pk?: Maybe<Practice_To_Promotion>;
  /** delete data from the table: "practice_to_student" */
  delete_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** delete single row from the table: "practice_to_student" */
  delete_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** delete data from the table: "practice_yield" */
  delete_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_yield" */
  delete_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** delete data from the table: "practice_yield_type" */
  delete_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** delete single row from the table: "practice_yield_type" */
  delete_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** delete data from the table: "promotion" */
  delete_promotion?: Maybe<Promotion_Mutation_Response>;
  /** delete single row from the table: "promotion" */
  delete_promotion_by_pk?: Maybe<Promotion>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "student_practice_yield" */
  delete_student_practice_yield?: Maybe<
    Student_Practice_Yield_Mutation_Response
  >;
  /** delete single row from the table: "student_practice_yield" */
  delete_student_practice_yield_by_pk?: Maybe<Student_Practice_Yield>;
  /** delete data from the table: "student_to_promotion" */
  delete_student_to_promotion?: Maybe<Student_To_Promotion_Mutation_Response>;
  /** delete single row from the table: "student_to_promotion" */
  delete_student_to_promotion_by_pk?: Maybe<Student_To_Promotion>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "practice" */
  insert_practice?: Maybe<Practice_Mutation_Response>;
  /** insert a single row into the table: "practice" */
  insert_practice_one?: Maybe<Practice>;
  /** insert data into the table: "practice_to_promotion" */
  insert_practice_to_promotion?: Maybe<Practice_To_Promotion_Mutation_Response>;
  /** insert a single row into the table: "practice_to_promotion" */
  insert_practice_to_promotion_one?: Maybe<Practice_To_Promotion>;
  /** insert data into the table: "practice_to_student" */
  insert_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student" */
  insert_practice_to_student_one?: Maybe<Practice_To_Student>;
  /** insert data into the table: "practice_yield" */
  insert_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** insert a single row into the table: "practice_yield" */
  insert_practice_yield_one?: Maybe<Practice_Yield>;
  /** insert data into the table: "practice_yield_type" */
  insert_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_type" */
  insert_practice_yield_type_one?: Maybe<Practice_Yield_Type>;
  /** insert data into the table: "promotion" */
  insert_promotion?: Maybe<Promotion_Mutation_Response>;
  /** insert a single row into the table: "promotion" */
  insert_promotion_one?: Maybe<Promotion>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "student_practice_yield" */
  insert_student_practice_yield?: Maybe<
    Student_Practice_Yield_Mutation_Response
  >;
  /** insert a single row into the table: "student_practice_yield" */
  insert_student_practice_yield_one?: Maybe<Student_Practice_Yield>;
  /** insert data into the table: "student_to_promotion" */
  insert_student_to_promotion?: Maybe<Student_To_Promotion_Mutation_Response>;
  /** insert a single row into the table: "student_to_promotion" */
  insert_student_to_promotion_one?: Maybe<Student_To_Promotion>;
  /** perform the action: "linkStudentToUser" */
  linkStudentToUser?: Maybe<LinkStudentToUserOutput>;
  /** perform the action: "sendStudentClaimMail" */
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  /** perform the action: "submitHandoff" */
  submitHandoff?: Maybe<SubmitHandoffOutput>;
  /** update data of the table: "user" */
  updateUser?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "practice" */
  update_practice?: Maybe<Practice_Mutation_Response>;
  /** update single row of the table: "practice" */
  update_practice_by_pk?: Maybe<Practice>;
  /** update data of the table: "practice_to_promotion" */
  update_practice_to_promotion?: Maybe<Practice_To_Promotion_Mutation_Response>;
  /** update single row of the table: "practice_to_promotion" */
  update_practice_to_promotion_by_pk?: Maybe<Practice_To_Promotion>;
  /** update data of the table: "practice_to_student" */
  update_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** update single row of the table: "practice_to_student" */
  update_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** update data of the table: "practice_yield" */
  update_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** update single row of the table: "practice_yield" */
  update_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** update data of the table: "practice_yield_type" */
  update_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** update single row of the table: "practice_yield_type" */
  update_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** update data of the table: "promotion" */
  update_promotion?: Maybe<Promotion_Mutation_Response>;
  /** update single row of the table: "promotion" */
  update_promotion_by_pk?: Maybe<Promotion>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update data of the table: "student_practice_yield" */
  update_student_practice_yield?: Maybe<
    Student_Practice_Yield_Mutation_Response
  >;
  /** update single row of the table: "student_practice_yield" */
  update_student_practice_yield_by_pk?: Maybe<Student_Practice_Yield>;
  /** update data of the table: "student_to_promotion" */
  update_student_to_promotion?: Maybe<Student_To_Promotion_Mutation_Response>;
  /** update single row of the table: "student_to_promotion" */
  update_student_to_promotion_by_pk?: Maybe<Student_To_Promotion>;
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_PracticeArgs = {
  where: Practice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_PromotionArgs = {
  where: Practice_To_Promotion_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Promotion_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_StudentArgs = {
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_YieldArgs = {
  where: Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_TypeArgs = {
  where: Practice_Yield_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_PromotionArgs = {
  where: Promotion_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Promotion_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_StudentArgs = {
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Student_Practice_YieldArgs = {
  where: Student_Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_Practice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Student_To_PromotionArgs = {
  where: Student_To_Promotion_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_To_Promotion_By_PkArgs = {
  promotion_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PracticeArgs = {
  objects: Array<Practice_Insert_Input>;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_OneArgs = {
  object: Practice_Insert_Input;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_PromotionArgs = {
  objects: Array<Practice_To_Promotion_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Promotion_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Promotion_OneArgs = {
  object: Practice_To_Promotion_Insert_Input;
  on_conflict?: Maybe<Practice_To_Promotion_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_StudentArgs = {
  objects: Array<Practice_To_Student_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_OneArgs = {
  object: Practice_To_Student_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_YieldArgs = {
  objects: Array<Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_OneArgs = {
  object: Practice_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_TypeArgs = {
  objects: Array<Practice_Yield_Type_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Type_OneArgs = {
  object: Practice_Yield_Type_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PromotionArgs = {
  objects: Array<Promotion_Insert_Input>;
  on_conflict?: Maybe<Promotion_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Promotion_OneArgs = {
  object: Promotion_Insert_Input;
  on_conflict?: Maybe<Promotion_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StudentArgs = {
  objects: Array<Student_Insert_Input>;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_OneArgs = {
  object: Student_Insert_Input;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_Practice_YieldArgs = {
  objects: Array<Student_Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Student_Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_Practice_Yield_OneArgs = {
  object: Student_Practice_Yield_Insert_Input;
  on_conflict?: Maybe<Student_Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_PromotionArgs = {
  objects: Array<Student_To_Promotion_Insert_Input>;
  on_conflict?: Maybe<Student_To_Promotion_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_Promotion_OneArgs = {
  object: Student_To_Promotion_Insert_Input;
  on_conflict?: Maybe<Student_To_Promotion_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLinkStudentToUserArgs = {
  linkId: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootSendStudentClaimMailArgs = {
  studentsIds: Array<Maybe<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_RootSubmitHandoffArgs = {
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff>;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PracticeArgs = {
  _set?: Maybe<Practice_Set_Input>;
  where: Practice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_By_PkArgs = {
  _set?: Maybe<Practice_Set_Input>;
  pk_columns: Practice_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_PromotionArgs = {
  _set?: Maybe<Practice_To_Promotion_Set_Input>;
  where: Practice_To_Promotion_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Promotion_By_PkArgs = {
  _set?: Maybe<Practice_To_Promotion_Set_Input>;
  pk_columns: Practice_To_Promotion_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_StudentArgs = {
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_By_PkArgs = {
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  pk_columns: Practice_To_Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_YieldArgs = {
  _append?: Maybe<Practice_Yield_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Delete_Key_Input>;
  _prepend?: Maybe<Practice_Yield_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Set_Input>;
  where: Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_By_PkArgs = {
  _append?: Maybe<Practice_Yield_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Delete_Key_Input>;
  _prepend?: Maybe<Practice_Yield_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Set_Input>;
  pk_columns: Practice_Yield_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_TypeArgs = {
  _set?: Maybe<Practice_Yield_Type_Set_Input>;
  where: Practice_Yield_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Type_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Type_Set_Input>;
  pk_columns: Practice_Yield_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PromotionArgs = {
  _set?: Maybe<Promotion_Set_Input>;
  where: Promotion_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Promotion_By_PkArgs = {
  _set?: Maybe<Promotion_Set_Input>;
  pk_columns: Promotion_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StudentArgs = {
  _set?: Maybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_By_PkArgs = {
  _set?: Maybe<Student_Set_Input>;
  pk_columns: Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Student_Practice_YieldArgs = {
  _set?: Maybe<Student_Practice_Yield_Set_Input>;
  where: Student_Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_Practice_Yield_By_PkArgs = {
  _set?: Maybe<Student_Practice_Yield_Set_Input>;
  pk_columns: Student_Practice_Yield_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_PromotionArgs = {
  _set?: Maybe<Student_To_Promotion_Set_Input>;
  where: Student_To_Promotion_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_Promotion_By_PkArgs = {
  _set?: Maybe<Student_To_Promotion_Set_Input>;
  pk_columns: Student_To_Promotion_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "practice" */
export type Practice = {
  __typename?: 'practice';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  practice_to_promotions: Array<Practice_To_Promotion>;
  /** An aggregated array relationship */
  practice_to_promotions_aggregate: Practice_To_Promotion_Aggregate;
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice" */
export type PracticePractice_To_PromotionsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_To_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice" */
export type Practice_Aggregate = {
  __typename?: 'practice_aggregate';
  aggregate?: Maybe<Practice_Aggregate_Fields>;
  nodes: Array<Practice>;
};

/** aggregate fields of "practice" */
export type Practice_Aggregate_Fields = {
  __typename?: 'practice_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Max_Fields>;
  min?: Maybe<Practice_Min_Fields>;
};

/** aggregate fields of "practice" */
export type Practice_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice" */
export type Practice_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Max_Order_By>;
  min?: Maybe<Practice_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice" */
export type Practice_Arr_Rel_Insert_Input = {
  data: Array<Practice_Insert_Input>;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice". All fields are combined with a logical 'AND'. */
export type Practice_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Bool_Exp>>>;
  _not?: Maybe<Practice_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_promotions?: Maybe<Practice_To_Promotion_Bool_Exp>;
  practice_yields?: Maybe<Practice_Yield_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice" */
export enum Practice_Constraint {
  /** unique or primary key constraint */
  PracticePkey = 'practice_pkey',
  /** unique or primary key constraint */
  PracticeTitleKey = 'practice_title_key',
}

/** input type for inserting data into table "practice" */
export type Practice_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_promotions?: Maybe<Practice_To_Promotion_Arr_Rel_Insert_Input>;
  practice_yields?: Maybe<Practice_Yield_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Max_Fields = {
  __typename?: 'practice_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice" */
export type Practice_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Min_Fields = {
  __typename?: 'practice_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice" */
export type Practice_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice" */
export type Practice_Mutation_Response = {
  __typename?: 'practice_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice>;
};

/** input type for inserting object relation for remote table "practice" */
export type Practice_Obj_Rel_Insert_Input = {
  data: Practice_Insert_Input;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** on conflict condition type for table "practice" */
export type Practice_On_Conflict = {
  constraint: Practice_Constraint;
  update_columns: Array<Practice_Update_Column>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** ordering options when selecting data from "practice" */
export type Practice_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_promotions_aggregate?: Maybe<
    Practice_To_Promotion_Aggregate_Order_By
  >;
  practice_yields_aggregate?: Maybe<Practice_Yield_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice" */
export type Practice_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice" */
export enum Practice_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice" */
export type Practice_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_to_promotion" */
export type Practice_To_Promotion = {
  __typename?: 'practice_to_promotion';
  can_student_see_feedback: Scalars['Boolean'];
  can_student_see_grade: Scalars['Boolean'];
  close_date?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  gitea_org_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "is_open_practice_to_promotion_fn" */
  is_open?: Maybe<Scalars['Boolean']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  /** An object relationship */
  promotion: Promotion;
  promotion_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_promotion" */
export type Practice_To_PromotionPractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "practice_to_promotion" */
export type Practice_To_PromotionPractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** aggregated selection of "practice_to_promotion" */
export type Practice_To_Promotion_Aggregate = {
  __typename?: 'practice_to_promotion_aggregate';
  aggregate?: Maybe<Practice_To_Promotion_Aggregate_Fields>;
  nodes: Array<Practice_To_Promotion>;
};

/** aggregate fields of "practice_to_promotion" */
export type Practice_To_Promotion_Aggregate_Fields = {
  __typename?: 'practice_to_promotion_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Promotion_Max_Fields>;
  min?: Maybe<Practice_To_Promotion_Min_Fields>;
};

/** aggregate fields of "practice_to_promotion" */
export type Practice_To_Promotion_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_promotion" */
export type Practice_To_Promotion_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Promotion_Max_Order_By>;
  min?: Maybe<Practice_To_Promotion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_promotion" */
export type Practice_To_Promotion_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Promotion_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Promotion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_to_promotion". All fields are combined with a logical 'AND'. */
export type Practice_To_Promotion_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Promotion_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Promotion_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Promotion_Bool_Exp>>>;
  can_student_see_feedback?: Maybe<Boolean_Comparison_Exp>;
  can_student_see_grade?: Maybe<Boolean_Comparison_Exp>;
  close_date?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  open_date?: Maybe<Timestamptz_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  promotion?: Maybe<Promotion_Bool_Exp>;
  promotion_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_promotion" */
export enum Practice_To_Promotion_Constraint {
  /** unique or primary key constraint */
  PracticeToPromotionPkey = 'practice_to_promotion_pkey',
  /** unique or primary key constraint */
  PracticeToPromotionPromotionIdPracticeIdKey = 'practice_to_promotion_promotion_id_practice_id_key',
}

/** input type for inserting data into table "practice_to_promotion" */
export type Practice_To_Promotion_Insert_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  close_date?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  promotion?: Maybe<Promotion_Obj_Rel_Insert_Input>;
  promotion_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Promotion_Max_Fields = {
  __typename?: 'practice_to_promotion_max_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  promotion_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_promotion" */
export type Practice_To_Promotion_Max_Order_By = {
  close_date?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Promotion_Min_Fields = {
  __typename?: 'practice_to_promotion_min_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  promotion_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_promotion" */
export type Practice_To_Promotion_Min_Order_By = {
  close_date?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_promotion" */
export type Practice_To_Promotion_Mutation_Response = {
  __typename?: 'practice_to_promotion_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Promotion>;
};

/** input type for inserting object relation for remote table "practice_to_promotion" */
export type Practice_To_Promotion_Obj_Rel_Insert_Input = {
  data: Practice_To_Promotion_Insert_Input;
  on_conflict?: Maybe<Practice_To_Promotion_On_Conflict>;
};

/** on conflict condition type for table "practice_to_promotion" */
export type Practice_To_Promotion_On_Conflict = {
  constraint: Practice_To_Promotion_Constraint;
  update_columns: Array<Practice_To_Promotion_Update_Column>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_promotion" */
export type Practice_To_Promotion_Order_By = {
  can_student_see_feedback?: Maybe<Order_By>;
  can_student_see_grade?: Maybe<Order_By>;
  close_date?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<
    Practice_To_Student_Aggregate_Order_By
  >;
  promotion?: Maybe<Promotion_Order_By>;
  promotion_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_promotion" */
export type Practice_To_Promotion_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_promotion" */
export enum Practice_To_Promotion_Select_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgName = 'gitea_org_name',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'open_date',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_promotion" */
export type Practice_To_Promotion_Set_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  close_date?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  promotion_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "practice_to_promotion" */
export enum Practice_To_Promotion_Update_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgName = 'gitea_org_name',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'open_date',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_to_student" */
export type Practice_To_Student = {
  __typename?: 'practice_to_student';
  created_at: Scalars['timestamptz'];
  feedback?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  graded: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_promotion: Practice_To_Promotion;
  promotion_practice_id: Scalars['uuid'];
  /** An object relationship */
  student: Student;
  student_id: Scalars['uuid'];
  /** An array relationship */
  student_practice_yields: Array<Student_Practice_Yield>;
  /** An aggregated array relationship */
  student_practice_yields_aggregate: Student_Practice_Yield_Aggregate;
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentStudent_Practice_YieldsArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentStudent_Practice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_to_student" */
export type Practice_To_Student_Aggregate = {
  __typename?: 'practice_to_student_aggregate';
  aggregate?: Maybe<Practice_To_Student_Aggregate_Fields>;
  nodes: Array<Practice_To_Student>;
};

/** aggregate fields of "practice_to_student" */
export type Practice_To_Student_Aggregate_Fields = {
  __typename?: 'practice_to_student_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Max_Fields>;
  min?: Maybe<Practice_To_Student_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Variance_Fields>;
};

/** aggregate fields of "practice_to_student" */
export type Practice_To_Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student" */
export type Practice_To_Student_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_student" */
export type Practice_To_Student_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Avg_Fields = {
  __typename?: 'practice_to_student_avg_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student" */
export type Practice_To_Student_Avg_Order_By = {
  grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<String_Comparison_Exp>;
  grade?: Maybe<Int_Comparison_Exp>;
  graded?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_promotion?: Maybe<Practice_To_Promotion_Bool_Exp>;
  promotion_practice_id?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  student_practice_yields?: Maybe<Student_Practice_Yield_Bool_Exp>;
  submited?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student" */
export enum Practice_To_Student_Constraint {
  /** unique or primary key constraint */
  PracticeToStudentPkey = 'practice_to_student_pkey',
  /** unique or primary key constraint */
  PracticeToStudentStudentIdPromotionPracticeIdKey = 'practice_to_student_student_id_promotion_practice_id_key',
}

/** input type for incrementing integer column in table "practice_to_student" */
export type Practice_To_Student_Inc_Input = {
  grade?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "practice_to_student" */
export type Practice_To_Student_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_promotion?: Maybe<Practice_To_Promotion_Obj_Rel_Insert_Input>;
  promotion_practice_id?: Maybe<Scalars['uuid']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  student_practice_yields?: Maybe<Student_Practice_Yield_Arr_Rel_Insert_Input>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Max_Fields = {
  __typename?: 'practice_to_student_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  promotion_practice_id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student" */
export type Practice_To_Student_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_practice_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Min_Fields = {
  __typename?: 'practice_to_student_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  promotion_practice_id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student" */
export type Practice_To_Student_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_practice_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student" */
export type Practice_To_Student_Mutation_Response = {
  __typename?: 'practice_to_student_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student>;
};

/** input type for inserting object relation for remote table "practice_to_student" */
export type Practice_To_Student_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** on conflict condition type for table "practice_to_student" */
export type Practice_To_Student_On_Conflict = {
  constraint: Practice_To_Student_Constraint;
  update_columns: Array<Practice_To_Student_Update_Column>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student" */
export type Practice_To_Student_Order_By = {
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  graded?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_promotion?: Maybe<Practice_To_Promotion_Order_By>;
  promotion_practice_id?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
  student_practice_yields_aggregate?: Maybe<
    Student_Practice_Yield_Aggregate_Order_By
  >;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student" */
export type Practice_To_Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_student" */
export enum Practice_To_Student_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  PromotionPracticeId = 'promotion_practice_id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student" */
export type Practice_To_Student_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  promotion_practice_id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Stddev_Fields = {
  __typename?: 'practice_to_student_stddev_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_stddev_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_stddev_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Sum_Fields = {
  __typename?: 'practice_to_student_sum_fields';
  grade?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "practice_to_student" */
export type Practice_To_Student_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student" */
export enum Practice_To_Student_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  PromotionPracticeId = 'promotion_practice_id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_To_Student_Var_Pop_Fields = {
  __typename?: 'practice_to_student_var_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student" */
export type Practice_To_Student_Var_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Var_Samp_Fields = {
  __typename?: 'practice_to_student_var_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student" */
export type Practice_To_Student_Var_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Variance_Fields = {
  __typename?: 'practice_to_student_variance_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student" */
export type Practice_To_Student_Variance_Order_By = {
  grade?: Maybe<Order_By>;
};

/** update columns of table "practice" */
export enum Practice_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_yield" */
export type Practice_Yield = {
  __typename?: 'practice_yield';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  method: Practice_Yield_Type_Enum;
  name: Scalars['String'];
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield_type: Practice_Yield_Type;
  /** An array relationship */
  student_practice_yields: Array<Student_Practice_Yield>;
  /** An aggregated array relationship */
  student_practice_yields_aggregate: Student_Practice_Yield_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldStudent_Practice_YieldsArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldStudent_Practice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_yield" */
export type Practice_Yield_Aggregate = {
  __typename?: 'practice_yield_aggregate';
  aggregate?: Maybe<Practice_Yield_Aggregate_Fields>;
  nodes: Array<Practice_Yield>;
};

/** aggregate fields of "practice_yield" */
export type Practice_Yield_Aggregate_Fields = {
  __typename?: 'practice_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Max_Fields>;
  min?: Maybe<Practice_Yield_Min_Fields>;
};

/** aggregate fields of "practice_yield" */
export type Practice_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield" */
export type Practice_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Max_Order_By>;
  min?: Maybe<Practice_Yield_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield" */
export type Practice_Yield_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  method?: Maybe<Practice_Yield_Type_Enum_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Bool_Exp>;
  student_practice_yields?: Maybe<Student_Practice_Yield_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield" */
export enum Practice_Yield_Constraint {
  /** unique or primary key constraint */
  PracticeYieldPkey = 'practice_yield_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_Yield_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_Yield_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_Yield_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "practice_yield" */
export type Practice_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  method?: Maybe<Practice_Yield_Type_Enum>;
  name?: Maybe<Scalars['String']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Obj_Rel_Insert_Input>;
  student_practice_yields?: Maybe<Student_Practice_Yield_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Max_Fields = {
  __typename?: 'practice_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield" */
export type Practice_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Min_Fields = {
  __typename?: 'practice_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield" */
export type Practice_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield" */
export type Practice_Yield_Mutation_Response = {
  __typename?: 'practice_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield>;
};

/** input type for inserting object relation for remote table "practice_yield" */
export type Practice_Yield_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** on conflict condition type for table "practice_yield" */
export type Practice_Yield_On_Conflict = {
  constraint: Practice_Yield_Constraint;
  update_columns: Array<Practice_Yield_Update_Column>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield" */
export type Practice_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  method?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Order_By>;
  student_practice_yields_aggregate?: Maybe<
    Student_Practice_Yield_Aggregate_Order_By
  >;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield" */
export type Practice_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield" */
export enum Practice_Yield_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Method = 'method',
  /** column name */
  Name = 'name',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield" */
export type Practice_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  method?: Maybe<Practice_Yield_Type_Enum>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_Type = {
  __typename?: 'practice_yield_type';
  name: Scalars['String'];
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_TypePractice_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_TypePractice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate = {
  __typename?: 'practice_yield_type_aggregate';
  aggregate?: Maybe<Practice_Yield_Type_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Type>;
};

/** aggregate fields of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_Fields = {
  __typename?: 'practice_yield_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Type_Max_Fields>;
  min?: Maybe<Practice_Yield_Type_Min_Fields>;
};

/** aggregate fields of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Type_Max_Order_By>;
  min?: Maybe<Practice_Yield_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_type" */
export type Practice_Yield_Type_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Type_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_type". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Type_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Type_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  practice_yields?: Maybe<Practice_Yield_Bool_Exp>;
};

/** unique or primary key constraints on table "practice_yield_type" */
export enum Practice_Yield_Type_Constraint {
  /** unique or primary key constraint */
  PracticeYieldTypePkey = 'practice_yield_type_pkey',
}

export enum Practice_Yield_Type_Enum {
  Blob = 'BLOB',
  GitRepo = 'GIT_REPO',
}

/** expression to compare columns of type practice_yield_type_enum. All fields are combined with logical 'AND'. */
export type Practice_Yield_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Practice_Yield_Type_Enum>;
  _in?: Maybe<Array<Practice_Yield_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Practice_Yield_Type_Enum>;
  _nin?: Maybe<Array<Practice_Yield_Type_Enum>>;
};

/** input type for inserting data into table "practice_yield_type" */
export type Practice_Yield_Type_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  practice_yields?: Maybe<Practice_Yield_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Practice_Yield_Type_Max_Fields = {
  __typename?: 'practice_yield_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_yield_type" */
export type Practice_Yield_Type_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Type_Min_Fields = {
  __typename?: 'practice_yield_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_yield_type" */
export type Practice_Yield_Type_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_type" */
export type Practice_Yield_Type_Mutation_Response = {
  __typename?: 'practice_yield_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Type>;
};

/** input type for inserting object relation for remote table "practice_yield_type" */
export type Practice_Yield_Type_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Type_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_type" */
export type Practice_Yield_Type_On_Conflict = {
  constraint: Practice_Yield_Type_Constraint;
  update_columns: Array<Practice_Yield_Type_Update_Column>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_type" */
export type Practice_Yield_Type_Order_By = {
  name?: Maybe<Order_By>;
  practice_yields_aggregate?: Maybe<Practice_Yield_Aggregate_Order_By>;
};

/** primary key columns input for table: "practice_yield_type" */
export type Practice_Yield_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_type" */
export enum Practice_Yield_Type_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_type" */
export type Practice_Yield_Type_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_yield_type" */
export enum Practice_Yield_Type_Update_Column {
  /** column name */
  Name = 'name',
}

/** update columns of table "practice_yield" */
export enum Practice_Yield_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Method = 'method',
  /** column name */
  Name = 'name',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "promotion" */
export type Promotion = {
  __typename?: 'promotion';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  practice_to_promotions: Array<Practice_To_Promotion>;
  /** An aggregated array relationship */
  practice_to_promotions_aggregate: Practice_To_Promotion_Aggregate;
  /** An array relationship */
  student_to_promotions: Array<Student_To_Promotion>;
  /** An aggregated array relationship */
  student_to_promotions_aggregate: Student_To_Promotion_Aggregate;
  updated_at: Scalars['timestamptz'];
  years: Scalars['String'];
};

/** columns and relationships of "promotion" */
export type PromotionPractice_To_PromotionsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** columns and relationships of "promotion" */
export type PromotionPractice_To_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** columns and relationships of "promotion" */
export type PromotionStudent_To_PromotionsArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** columns and relationships of "promotion" */
export type PromotionStudent_To_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** aggregated selection of "promotion" */
export type Promotion_Aggregate = {
  __typename?: 'promotion_aggregate';
  aggregate?: Maybe<Promotion_Aggregate_Fields>;
  nodes: Array<Promotion>;
};

/** aggregate fields of "promotion" */
export type Promotion_Aggregate_Fields = {
  __typename?: 'promotion_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Promotion_Max_Fields>;
  min?: Maybe<Promotion_Min_Fields>;
};

/** aggregate fields of "promotion" */
export type Promotion_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotion_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "promotion" */
export type Promotion_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Promotion_Max_Order_By>;
  min?: Maybe<Promotion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "promotion" */
export type Promotion_Arr_Rel_Insert_Input = {
  data: Array<Promotion_Insert_Input>;
  on_conflict?: Maybe<Promotion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "promotion". All fields are combined with a logical 'AND'. */
export type Promotion_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Promotion_Bool_Exp>>>;
  _not?: Maybe<Promotion_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Promotion_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice_to_promotions?: Maybe<Practice_To_Promotion_Bool_Exp>;
  student_to_promotions?: Maybe<Student_To_Promotion_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  years?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "promotion" */
export enum Promotion_Constraint {
  /** unique or primary key constraint */
  PromotionNameYearsKey = 'promotion_name_years_key',
  /** unique or primary key constraint */
  PromotionPkey = 'promotion_pkey',
}

/** input type for inserting data into table "promotion" */
export type Promotion_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_to_promotions?: Maybe<Practice_To_Promotion_Arr_Rel_Insert_Input>;
  student_to_promotions?: Maybe<Student_To_Promotion_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Promotion_Max_Fields = {
  __typename?: 'promotion_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "promotion" */
export type Promotion_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Promotion_Min_Fields = {
  __typename?: 'promotion_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "promotion" */
export type Promotion_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** response of any mutation on the table "promotion" */
export type Promotion_Mutation_Response = {
  __typename?: 'promotion_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Promotion>;
};

/** input type for inserting object relation for remote table "promotion" */
export type Promotion_Obj_Rel_Insert_Input = {
  data: Promotion_Insert_Input;
  on_conflict?: Maybe<Promotion_On_Conflict>;
};

/** on conflict condition type for table "promotion" */
export type Promotion_On_Conflict = {
  constraint: Promotion_Constraint;
  update_columns: Array<Promotion_Update_Column>;
  where?: Maybe<Promotion_Bool_Exp>;
};

/** ordering options when selecting data from "promotion" */
export type Promotion_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_to_promotions_aggregate?: Maybe<
    Practice_To_Promotion_Aggregate_Order_By
  >;
  student_to_promotions_aggregate?: Maybe<
    Student_To_Promotion_Aggregate_Order_By
  >;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** primary key columns input for table: "promotion" */
export type Promotion_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "promotion" */
export enum Promotion_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Years = 'years',
}

/** input type for updating data in table "promotion" */
export type Promotion_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** update columns of table "promotion" */
export enum Promotion_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Years = 'years',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_promotion" */
  practice_to_promotion: Array<Practice_To_Promotion>;
  /** fetch aggregated fields from the table: "practice_to_promotion" */
  practice_to_promotion_aggregate: Practice_To_Promotion_Aggregate;
  /** fetch data from the table: "practice_to_promotion" using primary key columns */
  practice_to_promotion_by_pk?: Maybe<Practice_To_Promotion>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "promotion" */
  promotion: Array<Promotion>;
  /** fetch aggregated fields from the table: "promotion" */
  promotion_aggregate: Promotion_Aggregate;
  /** fetch data from the table: "promotion" using primary key columns */
  promotion_by_pk?: Maybe<Promotion>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_practice_yield" */
  student_practice_yield: Array<Student_Practice_Yield>;
  /** fetch aggregated fields from the table: "student_practice_yield" */
  student_practice_yield_aggregate: Student_Practice_Yield_Aggregate;
  /** fetch data from the table: "student_practice_yield" using primary key columns */
  student_practice_yield_by_pk?: Maybe<Student_Practice_Yield>;
  /** fetch data from the table: "student_to_promotion" */
  student_to_promotion: Array<Student_To_Promotion>;
  /** fetch aggregated fields from the table: "student_to_promotion" */
  student_to_promotion_aggregate: Student_To_Promotion_Aggregate;
  /** fetch data from the table: "student_to_promotion" using primary key columns */
  student_to_promotion_by_pk?: Maybe<Student_To_Promotion>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

/** query root */
export type Query_RootPracticeArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_PromotionArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Promotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Promotion_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_StudentArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_TypeArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootPromotionArgs = {
  distinct_on?: Maybe<Array<Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Promotion_Order_By>>;
  where?: Maybe<Promotion_Bool_Exp>;
};

/** query root */
export type Query_RootPromotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Promotion_Order_By>>;
  where?: Maybe<Promotion_Bool_Exp>;
};

/** query root */
export type Query_RootPromotion_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootStudent_Practice_YieldArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_Practice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_Practice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootStudent_To_PromotionArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Promotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Promotion_By_PkArgs = {
  promotion_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUserAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUserByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "student" */
export type Student = {
  __typename?: 'student';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  /** A computed field, executes function "student_full_name" */
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  /** An array relationship */
  student_to_promotions: Array<Student_To_Promotion>;
  /** An aggregated array relationship */
  student_to_promotions_aggregate: Student_To_Promotion_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student" */
export type StudentPractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentPractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_PromotionsArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** aggregated selection of "student" */
export type Student_Aggregate = {
  __typename?: 'student_aggregate';
  aggregate?: Maybe<Student_Aggregate_Fields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_Fields = {
  __typename?: 'student_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_Max_Fields>;
  min?: Maybe<Student_Min_Fields>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student" */
export type Student_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Max_Order_By>;
  min?: Maybe<Student_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student" */
export type Student_Arr_Rel_Insert_Input = {
  data: Array<Student_Insert_Input>;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  _not?: Maybe<Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  claim_token?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  student_to_promotions?: Maybe<Student_To_Promotion_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "student" */
export enum Student_Constraint {
  /** unique or primary key constraint */
  StudentClaimTokenKey = 'student_claim_token_key',
  /** unique or primary key constraint */
  StudentEmailKey = 'student_email_key',
  /** unique or primary key constraint */
  StudentPkey = 'student_pkey',
  /** unique or primary key constraint */
  StudentUserIdKey = 'student_user_id_key',
}

/** input type for inserting data into table "student" */
export type Student_Insert_Input = {
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  student_to_promotions?: Maybe<Student_To_Promotion_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Student_Max_Fields = {
  __typename?: 'student_max_fields';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "student" */
export type Student_Max_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Min_Fields = {
  __typename?: 'student_min_fields';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "student" */
export type Student_Min_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student" */
export type Student_Mutation_Response = {
  __typename?: 'student_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student>;
};

/** input type for inserting object relation for remote table "student" */
export type Student_Obj_Rel_Insert_Input = {
  data: Student_Insert_Input;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** on conflict condition type for table "student" */
export type Student_On_Conflict = {
  constraint: Student_Constraint;
  update_columns: Array<Student_Update_Column>;
  where?: Maybe<Student_Bool_Exp>;
};

/** ordering options when selecting data from "student" */
export type Student_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<
    Practice_To_Student_Aggregate_Order_By
  >;
  student_to_promotions_aggregate?: Maybe<
    Student_To_Promotion_Aggregate_Order_By
  >;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "student" */
export type Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "student_practice_yield" */
export type Student_Practice_Yield = {
  __typename?: 'student_practice_yield';
  created_at: Scalars['timestamptz'];
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_student: Practice_To_Student;
  practice_to_student_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield: Practice_Yield;
  practice_yield_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** aggregated selection of "student_practice_yield" */
export type Student_Practice_Yield_Aggregate = {
  __typename?: 'student_practice_yield_aggregate';
  aggregate?: Maybe<Student_Practice_Yield_Aggregate_Fields>;
  nodes: Array<Student_Practice_Yield>;
};

/** aggregate fields of "student_practice_yield" */
export type Student_Practice_Yield_Aggregate_Fields = {
  __typename?: 'student_practice_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_Practice_Yield_Max_Fields>;
  min?: Maybe<Student_Practice_Yield_Min_Fields>;
};

/** aggregate fields of "student_practice_yield" */
export type Student_Practice_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student_practice_yield" */
export type Student_Practice_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Practice_Yield_Max_Order_By>;
  min?: Maybe<Student_Practice_Yield_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student_practice_yield" */
export type Student_Practice_Yield_Arr_Rel_Insert_Input = {
  data: Array<Student_Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Student_Practice_Yield_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student_practice_yield". All fields are combined with a logical 'AND'. */
export type Student_Practice_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_Practice_Yield_Bool_Exp>>>;
  _not?: Maybe<Student_Practice_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_Practice_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_and_repo?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_practice_yield" */
export enum Student_Practice_Yield_Constraint {
  /** unique or primary key constraint */
  StudentPracticeYieldPkey = 'student_practice_yield_pkey',
  /** unique or primary key constraint */
  StudentPracticeYieldPracticeYieldIdPracticeToStudenKey = 'student_practice_yield_practice_yield_id_practice_to_studen_key',
}

/** input type for inserting data into table "student_practice_yield" */
export type Student_Practice_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Student_Practice_Yield_Max_Fields = {
  __typename?: 'student_practice_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "student_practice_yield" */
export type Student_Practice_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Practice_Yield_Min_Fields = {
  __typename?: 'student_practice_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "student_practice_yield" */
export type Student_Practice_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_practice_yield" */
export type Student_Practice_Yield_Mutation_Response = {
  __typename?: 'student_practice_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student_Practice_Yield>;
};

/** input type for inserting object relation for remote table "student_practice_yield" */
export type Student_Practice_Yield_Obj_Rel_Insert_Input = {
  data: Student_Practice_Yield_Insert_Input;
  on_conflict?: Maybe<Student_Practice_Yield_On_Conflict>;
};

/** on conflict condition type for table "student_practice_yield" */
export type Student_Practice_Yield_On_Conflict = {
  constraint: Student_Practice_Yield_Constraint;
  update_columns: Array<Student_Practice_Yield_Update_Column>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "student_practice_yield" */
export type Student_Practice_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "student_practice_yield" */
export type Student_Practice_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "student_practice_yield" */
export enum Student_Practice_Yield_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgAndRepo = 'gitea_org_and_repo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "student_practice_yield" */
export type Student_Practice_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "student_practice_yield" */
export enum Student_Practice_Yield_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgAndRepo = 'gitea_org_and_repo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** select columns of table "student" */
export enum Student_Select_Column {
  /** column name */
  ClaimToken = 'claim_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "student" */
export type Student_Set_Input = {
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student_to_promotion" */
export type Student_To_Promotion = {
  __typename?: 'student_to_promotion';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  promotion: Promotion;
  promotion_id: Scalars['uuid'];
  /** An object relationship */
  student: Student;
  student_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "student_to_promotion" */
export type Student_To_Promotion_Aggregate = {
  __typename?: 'student_to_promotion_aggregate';
  aggregate?: Maybe<Student_To_Promotion_Aggregate_Fields>;
  nodes: Array<Student_To_Promotion>;
};

/** aggregate fields of "student_to_promotion" */
export type Student_To_Promotion_Aggregate_Fields = {
  __typename?: 'student_to_promotion_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_To_Promotion_Max_Fields>;
  min?: Maybe<Student_To_Promotion_Min_Fields>;
};

/** aggregate fields of "student_to_promotion" */
export type Student_To_Promotion_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student_to_promotion" */
export type Student_To_Promotion_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_To_Promotion_Max_Order_By>;
  min?: Maybe<Student_To_Promotion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student_to_promotion" */
export type Student_To_Promotion_Arr_Rel_Insert_Input = {
  data: Array<Student_To_Promotion_Insert_Input>;
  on_conflict?: Maybe<Student_To_Promotion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student_to_promotion". All fields are combined with a logical 'AND'. */
export type Student_To_Promotion_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_To_Promotion_Bool_Exp>>>;
  _not?: Maybe<Student_To_Promotion_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_To_Promotion_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  promotion?: Maybe<Promotion_Bool_Exp>;
  promotion_id?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_to_promotion" */
export enum Student_To_Promotion_Constraint {
  /** unique or primary key constraint */
  StudentToPromotionPkey = 'student_to_promotion_pkey',
  /** unique or primary key constraint */
  StudentToPromotionPromotionIdStudentIdKey = 'student_to_promotion_promotion_id_student_id_key',
}

/** input type for inserting data into table "student_to_promotion" */
export type Student_To_Promotion_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  promotion?: Maybe<Promotion_Obj_Rel_Insert_Input>;
  promotion_id?: Maybe<Scalars['uuid']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Student_To_Promotion_Max_Fields = {
  __typename?: 'student_to_promotion_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  promotion_id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "student_to_promotion" */
export type Student_To_Promotion_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_To_Promotion_Min_Fields = {
  __typename?: 'student_to_promotion_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  promotion_id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "student_to_promotion" */
export type Student_To_Promotion_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_to_promotion" */
export type Student_To_Promotion_Mutation_Response = {
  __typename?: 'student_to_promotion_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student_To_Promotion>;
};

/** input type for inserting object relation for remote table "student_to_promotion" */
export type Student_To_Promotion_Obj_Rel_Insert_Input = {
  data: Student_To_Promotion_Insert_Input;
  on_conflict?: Maybe<Student_To_Promotion_On_Conflict>;
};

/** on conflict condition type for table "student_to_promotion" */
export type Student_To_Promotion_On_Conflict = {
  constraint: Student_To_Promotion_Constraint;
  update_columns: Array<Student_To_Promotion_Update_Column>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** ordering options when selecting data from "student_to_promotion" */
export type Student_To_Promotion_Order_By = {
  created_at?: Maybe<Order_By>;
  promotion?: Maybe<Promotion_Order_By>;
  promotion_id?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "student_to_promotion" */
export type Student_To_Promotion_Pk_Columns_Input = {
  promotion_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** select columns of table "student_to_promotion" */
export enum Student_To_Promotion_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "student_to_promotion" */
export type Student_To_Promotion_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  promotion_id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "student_to_promotion" */
export enum Student_To_Promotion_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** update columns of table "student" */
export enum Student_Update_Column {
  /** column name */
  ClaimToken = 'claim_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_promotion" */
  practice_to_promotion: Array<Practice_To_Promotion>;
  /** fetch aggregated fields from the table: "practice_to_promotion" */
  practice_to_promotion_aggregate: Practice_To_Promotion_Aggregate;
  /** fetch data from the table: "practice_to_promotion" using primary key columns */
  practice_to_promotion_by_pk?: Maybe<Practice_To_Promotion>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "promotion" */
  promotion: Array<Promotion>;
  /** fetch aggregated fields from the table: "promotion" */
  promotion_aggregate: Promotion_Aggregate;
  /** fetch data from the table: "promotion" using primary key columns */
  promotion_by_pk?: Maybe<Promotion>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_practice_yield" */
  student_practice_yield: Array<Student_Practice_Yield>;
  /** fetch aggregated fields from the table: "student_practice_yield" */
  student_practice_yield_aggregate: Student_Practice_Yield_Aggregate;
  /** fetch data from the table: "student_practice_yield" using primary key columns */
  student_practice_yield_by_pk?: Maybe<Student_Practice_Yield>;
  /** fetch data from the table: "student_to_promotion" */
  student_to_promotion: Array<Student_To_Promotion>;
  /** fetch aggregated fields from the table: "student_to_promotion" */
  student_to_promotion_aggregate: Student_To_Promotion_Aggregate;
  /** fetch data from the table: "student_to_promotion" using primary key columns */
  student_to_promotion_by_pk?: Maybe<Student_To_Promotion>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

/** subscription root */
export type Subscription_RootPracticeArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_PromotionArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Promotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Promotion_Order_By>>;
  where?: Maybe<Practice_To_Promotion_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Promotion_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_StudentArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_TypeArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootPromotionArgs = {
  distinct_on?: Maybe<Array<Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Promotion_Order_By>>;
  where?: Maybe<Promotion_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPromotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Promotion_Order_By>>;
  where?: Maybe<Promotion_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPromotion_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStudent_Practice_YieldArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_Practice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Practice_Yield_Order_By>>;
  where?: Maybe<Student_Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_Practice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStudent_To_PromotionArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Promotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Promotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Promotion_Order_By>>;
  where?: Maybe<Student_To_Promotion_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Promotion_By_PkArgs = {
  promotion_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamptz'];
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firebaseId?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  photoUrl: Scalars['String'];
  /** An object relationship */
  student?: Maybe<Student>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  displayName?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firebaseId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  photoUrl?: Maybe<String_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserFirebaseIdKey = 'user_firebase_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  createdAt?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseId = 'firebaseId',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseId = 'firebaseId',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CurrentUserQueryVariables = Exact<{
  firebaseId: Scalars['String'];
}>;

export type CurrentUserQuery = { __typename?: 'query_root' } & {
  user: Array<
    { __typename?: 'user' } & Pick<
      User,
      | 'createdAt'
      | 'displayName'
      | 'email'
      | 'firebaseId'
      | 'photoUrl'
      | 'updatedAt'
      | 'id'
    >
  >;
};

export type ListTpYieldTypesQueryVariables = Exact<{ [key: string]: never }>;

export type ListTpYieldTypesQuery = { __typename?: 'query_root' } & {
  practice_yield_type: Array<
    { __typename?: 'practice_yield_type' } & Pick<Practice_Yield_Type, 'name'>
  >;
};

export type HandOffByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type HandOffByIdQuery = { __typename?: 'query_root' } & {
  practice_to_promotion_by_pk?: Maybe<
    { __typename?: 'practice_to_promotion' } & Pick<
      Practice_To_Promotion,
      'is_open' | 'open_date' | 'created_at' | 'close_date' | 'id'
    > & {
        practice: { __typename?: 'practice' } & Pick<
          Practice,
          'title' | 'description' | 'created_at' | 'id'
        > & {
            practice_yields: Array<
              { __typename?: 'practice_yield' } & Pick<
                Practice_Yield,
                'id' | 'meta' | 'method' | 'name' | 'description'
              >
            >;
          };
        practice_to_students: Array<
          { __typename?: 'practice_to_student' } & Pick<
            Practice_To_Student,
            'id' | 'student_id' | 'created_at'
          >
        >;
      }
  >;
};

export type SubmitHandoffMutationVariables = Exact<{
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff>;
}>;

export type SubmitHandoffMutation = { __typename?: 'mutation_root' } & {
  submitHandoff?: Maybe<
    { __typename?: 'SubmitHandoffOutput' } & Pick<SubmitHandoffOutput, 'status'>
  >;
};

export type HandoffListQueryVariables = Exact<{ [key: string]: never }>;

export type HandoffListQuery = { __typename?: 'query_root' } & {
  practice_to_promotion: Array<
    { __typename?: 'practice_to_promotion' } & Pick<
      Practice_To_Promotion,
      'is_open' | 'open_date' | 'created_at' | 'close_date' | 'id'
    > & {
        practice: { __typename?: 'practice' } & Pick<
          Practice,
          'title' | 'created_at' | 'id'
        >;
        promotion: { __typename?: 'promotion' } & Pick<
          Promotion,
          'name' | 'years'
        >;
        practice_to_students: Array<
          { __typename?: 'practice_to_student' } & Pick<
            Practice_To_Student,
            'id' | 'student_id' | 'created_at'
          >
        >;
      }
  >;
};

export type LinkStudentToUserMutationVariables = Exact<{
  linkId: Scalars['uuid'];
}>;

export type LinkStudentToUserMutation = { __typename?: 'mutation_root' } & {
  linkStudentToUser?: Maybe<
    { __typename?: 'linkStudentToUserOutput' } & Pick<
      LinkStudentToUserOutput,
      'ok'
    >
  >;
};

export type PromotionDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type PromotionDetailsQuery = { __typename?: 'query_root' } & {
  promotion_by_pk?: Maybe<
    { __typename?: 'promotion' } & Pick<Promotion, 'name' | 'years'> & {
        student_to_promotions_aggregate: {
          __typename?: 'student_to_promotion_aggregate';
        } & {
          nodes: Array<
            { __typename?: 'student_to_promotion' } & {
              student: { __typename?: 'student' } & Pick<
                Student,
                'id' | 'email' | 'full_name' | 'user_id'
              >;
            }
          >;
          aggregate?: Maybe<
            { __typename?: 'student_to_promotion_aggregate_fields' } & Pick<
              Student_To_Promotion_Aggregate_Fields,
              'count'
            >
          >;
        };
      }
  >;
};

export type SendStudentClaimMailMutationVariables = Exact<{
  studentsIds: Array<Maybe<Scalars['uuid']>>;
}>;

export type SendStudentClaimMailMutation = { __typename?: 'mutation_root' } & {
  sendStudentClaimMail?: Maybe<
    { __typename?: 'SendStudentClaimMailOutput' } & Pick<
      SendStudentClaimMailOutput,
      'nmbMailSent'
    >
  >;
};

export type ListPromotionsQueryVariables = Exact<{ [key: string]: never }>;

export type ListPromotionsQuery = { __typename?: 'query_root' } & {
  promotion: Array<
    { __typename?: 'promotion' } & Pick<Promotion, 'id' | 'name' | 'years'> & {
        student_to_promotions_aggregate: {
          __typename?: 'student_to_promotion_aggregate';
        } & {
          aggregate?: Maybe<
            { __typename?: 'student_to_promotion_aggregate_fields' } & Pick<
              Student_To_Promotion_Aggregate_Fields,
              'count'
            >
          >;
        };
      }
  >;
};

export type CreatePromotionMutationVariables = Exact<{
  name: Scalars['String'];
  years: Scalars['String'];
  students: Array<Student_To_Promotion_Insert_Input>;
}>;

export type CreatePromotionMutation = { __typename?: 'mutation_root' } & {
  insert_promotion_one?: Maybe<
    { __typename?: 'promotion' } & Pick<Promotion, 'created_at' | 'id'>
  >;
};

export type InsertNewPracticeToPromotionMutationVariables = Exact<{
  close_date: Scalars['timestamptz'];
  open_date: Scalars['timestamptz'];
  practice_id: Scalars['uuid'];
  promotion_id: Scalars['uuid'];
}>;

export type InsertNewPracticeToPromotionMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_promotion?: Maybe<
    { __typename?: 'practice_to_promotion_mutation_response' } & {
      returning: Array<
        { __typename?: 'practice_to_promotion' } & Pick<
          Practice_To_Promotion,
          'id'
        >
      >;
    }
  >;
};

export type GetPracticeDetailSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeDetailSubscription = {
  __typename?: 'subscription_root';
} & {
  practice_by_pk?: Maybe<
    { __typename?: 'practice' } & Pick<Practice, 'title'> & {
        practice_yields_aggregate: {
          __typename?: 'practice_yield_aggregate';
        } & {
          aggregate?: Maybe<
            { __typename?: 'practice_yield_aggregate_fields' } & Pick<
              Practice_Yield_Aggregate_Fields,
              'count'
            >
          >;
          nodes: Array<
            { __typename?: 'practice_yield' } & Pick<
              Practice_Yield,
              'id' | 'name' | 'method' | 'meta'
            >
          >;
        };
        practice_to_promotions_aggregate: {
          __typename?: 'practice_to_promotion_aggregate';
        } & {
          aggregate?: Maybe<
            { __typename?: 'practice_to_promotion_aggregate_fields' } & Pick<
              Practice_To_Promotion_Aggregate_Fields,
              'count'
            >
          >;
          nodes: Array<
            { __typename?: 'practice_to_promotion' } & Pick<
              Practice_To_Promotion,
              | 'can_student_see_feedback'
              | 'can_student_see_grade'
              | 'close_date'
              | 'created_at'
              | 'gitea_org_name'
              | 'is_open'
              | 'id'
              | 'open_date'
              | 'updated_at'
            > & {
                promotion: { __typename?: 'promotion' } & Pick<
                  Promotion,
                  'name' | 'years' | 'id'
                > & {
                    student_to_promotions: Array<
                      { __typename?: 'student_to_promotion' } & {
                        student: { __typename?: 'student' } & Pick<
                          Student,
                          'full_name' | 'email'
                        > & {
                            practice_to_students: Array<
                              { __typename?: 'practice_to_student' } & Pick<
                                Practice_To_Student,
                                'created_at' | 'grade'
                              >
                            >;
                          };
                      }
                    >;
                  };
              }
          >;
        };
      }
  >;
};

export type GetPromotionForTpAddQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetPromotionForTpAddQuery = { __typename?: 'query_root' } & {
  promotion: Array<
    { __typename?: 'promotion' } & Pick<Promotion, 'id' | 'name' | 'years'>
  >;
};

export type ListPracticeQueryVariables = Exact<{ [key: string]: never }>;

export type ListPracticeQuery = { __typename?: 'query_root' } & {
  practice: Array<
    { __typename?: 'practice' } & Pick<Practice, 'id' | 'title'> & {
        practice_to_promotions: Array<
          { __typename?: 'practice_to_promotion' } & Pick<
            Practice_To_Promotion,
            | 'id'
            | 'can_student_see_feedback'
            | 'can_student_see_grade'
            | 'close_date'
            | 'open_date'
          > & {
              promotion: { __typename?: 'promotion' } & Pick<
                Promotion,
                'name' | 'years'
              >;
            }
        >;
      }
  >;
};

export type CreateNewPracticeMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  data: Array<Practice_Yield_Insert_Input>;
}>;

export type CreateNewPracticeMutation = { __typename?: 'mutation_root' } & {
  insert_practice_one?: Maybe<
    { __typename?: 'practice' } & Pick<
      Practice,
      'created_at' | 'id' | 'title' | 'updated_at'
    >
  >;
};

export const CurrentUserDocument = gql`
  query currentUser($firebaseId: String!) {
    user(where: { firebaseId: { _eq: $firebaseId } }) {
      createdAt
      displayName
      email
      firebaseId
      photoUrl
      updatedAt
      id
    }
  }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *      firebaseId: // value for 'firebaseId'
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    baseOptions,
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    baseOptions,
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export const ListTpYieldTypesDocument = gql`
  query listTpYieldTypes {
    practice_yield_type {
      name
    }
  }
`;

/**
 * __useListTpYieldTypesQuery__
 *
 * To run a query within a React component, call `useListTpYieldTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTpYieldTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTpYieldTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTpYieldTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListTpYieldTypesQuery,
    ListTpYieldTypesQueryVariables
  >,
) {
  return Apollo.useQuery<ListTpYieldTypesQuery, ListTpYieldTypesQueryVariables>(
    ListTpYieldTypesDocument,
    baseOptions,
  );
}
export function useListTpYieldTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListTpYieldTypesQuery,
    ListTpYieldTypesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    ListTpYieldTypesQuery,
    ListTpYieldTypesQueryVariables
  >(ListTpYieldTypesDocument, baseOptions);
}
export type ListTpYieldTypesQueryHookResult = ReturnType<
  typeof useListTpYieldTypesQuery
>;
export type ListTpYieldTypesLazyQueryHookResult = ReturnType<
  typeof useListTpYieldTypesLazyQuery
>;
export type ListTpYieldTypesQueryResult = Apollo.QueryResult<
  ListTpYieldTypesQuery,
  ListTpYieldTypesQueryVariables
>;
export const HandOffByIdDocument = gql`
  query HandOffById($id: uuid!) {
    practice_to_promotion_by_pk(id: $id) {
      practice {
        title
        description
        created_at
        id
        practice_yields {
          id
          meta
          method
          name
          description
        }
      }
      practice_to_students {
        id
        student_id
        created_at
      }
      is_open
      open_date
      created_at
      close_date
      id
    }
  }
`;

/**
 * __useHandOffByIdQuery__
 *
 * To run a query within a React component, call `useHandOffByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useHandOffByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHandOffByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHandOffByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HandOffByIdQuery,
    HandOffByIdQueryVariables
  >,
) {
  return Apollo.useQuery<HandOffByIdQuery, HandOffByIdQueryVariables>(
    HandOffByIdDocument,
    baseOptions,
  );
}
export function useHandOffByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HandOffByIdQuery,
    HandOffByIdQueryVariables
  >,
) {
  return Apollo.useLazyQuery<HandOffByIdQuery, HandOffByIdQueryVariables>(
    HandOffByIdDocument,
    baseOptions,
  );
}
export type HandOffByIdQueryHookResult = ReturnType<typeof useHandOffByIdQuery>;
export type HandOffByIdLazyQueryHookResult = ReturnType<
  typeof useHandOffByIdLazyQuery
>;
export type HandOffByIdQueryResult = Apollo.QueryResult<
  HandOffByIdQuery,
  HandOffByIdQueryVariables
>;
export const SubmitHandoffDocument = gql`
  mutation submitHandoff(
    $practiceToPromotionId: uuid!
    $yields: [YieldForHandoff!]!
  ) {
    submitHandoff(
      practiceToPromotionId: $practiceToPromotionId
      yields: $yields
    ) {
      status
    }
  }
`;
export type SubmitHandoffMutationFn = Apollo.MutationFunction<
  SubmitHandoffMutation,
  SubmitHandoffMutationVariables
>;

/**
 * __useSubmitHandoffMutation__
 *
 * To run a mutation, you first call `useSubmitHandoffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitHandoffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitHandoffMutation, { data, loading, error }] = useSubmitHandoffMutation({
 *   variables: {
 *      practiceToPromotionId: // value for 'practiceToPromotionId'
 *      yields: // value for 'yields'
 *   },
 * });
 */
export function useSubmitHandoffMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitHandoffMutation,
    SubmitHandoffMutationVariables
  >,
) {
  return Apollo.useMutation<
    SubmitHandoffMutation,
    SubmitHandoffMutationVariables
  >(SubmitHandoffDocument, baseOptions);
}
export type SubmitHandoffMutationHookResult = ReturnType<
  typeof useSubmitHandoffMutation
>;
export type SubmitHandoffMutationResult = Apollo.MutationResult<
  SubmitHandoffMutation
>;
export type SubmitHandoffMutationOptions = Apollo.BaseMutationOptions<
  SubmitHandoffMutation,
  SubmitHandoffMutationVariables
>;
export const HandoffListDocument = gql`
  query handoffList {
    practice_to_promotion(order_by: { close_date: desc }) {
      practice {
        title
        created_at
        id
      }
      promotion {
        name
        years
      }
      practice_to_students {
        id
        student_id
        created_at
      }
      is_open
      open_date
      created_at
      close_date
      id
    }
  }
`;

/**
 * __useHandoffListQuery__
 *
 * To run a query within a React component, call `useHandoffListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHandoffListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHandoffListQuery({
 *   variables: {
 *   },
 * });
 */
export function useHandoffListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HandoffListQuery,
    HandoffListQueryVariables
  >,
) {
  return Apollo.useQuery<HandoffListQuery, HandoffListQueryVariables>(
    HandoffListDocument,
    baseOptions,
  );
}
export function useHandoffListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HandoffListQuery,
    HandoffListQueryVariables
  >,
) {
  return Apollo.useLazyQuery<HandoffListQuery, HandoffListQueryVariables>(
    HandoffListDocument,
    baseOptions,
  );
}
export type HandoffListQueryHookResult = ReturnType<typeof useHandoffListQuery>;
export type HandoffListLazyQueryHookResult = ReturnType<
  typeof useHandoffListLazyQuery
>;
export type HandoffListQueryResult = Apollo.QueryResult<
  HandoffListQuery,
  HandoffListQueryVariables
>;
export const LinkStudentToUserDocument = gql`
  mutation linkStudentToUser($linkId: uuid!) {
    linkStudentToUser(linkId: $linkId) {
      ok
    }
  }
`;
export type LinkStudentToUserMutationFn = Apollo.MutationFunction<
  LinkStudentToUserMutation,
  LinkStudentToUserMutationVariables
>;

/**
 * __useLinkStudentToUserMutation__
 *
 * To run a mutation, you first call `useLinkStudentToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLinkStudentToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [linkStudentToUserMutation, { data, loading, error }] = useLinkStudentToUserMutation({
 *   variables: {
 *      linkId: // value for 'linkId'
 *   },
 * });
 */
export function useLinkStudentToUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LinkStudentToUserMutation,
    LinkStudentToUserMutationVariables
  >,
) {
  return Apollo.useMutation<
    LinkStudentToUserMutation,
    LinkStudentToUserMutationVariables
  >(LinkStudentToUserDocument, baseOptions);
}
export type LinkStudentToUserMutationHookResult = ReturnType<
  typeof useLinkStudentToUserMutation
>;
export type LinkStudentToUserMutationResult = Apollo.MutationResult<
  LinkStudentToUserMutation
>;
export type LinkStudentToUserMutationOptions = Apollo.BaseMutationOptions<
  LinkStudentToUserMutation,
  LinkStudentToUserMutationVariables
>;
export const PromotionDetailsDocument = gql`
  query promotionDetails($id: uuid!) {
    promotion_by_pk(id: $id) {
      name
      years
      student_to_promotions_aggregate {
        nodes {
          student {
            id
            email
            full_name
            user_id
          }
        }
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __usePromotionDetailsQuery__
 *
 * To run a query within a React component, call `usePromotionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePromotionDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PromotionDetailsQuery,
    PromotionDetailsQueryVariables
  >,
) {
  return Apollo.useQuery<PromotionDetailsQuery, PromotionDetailsQueryVariables>(
    PromotionDetailsDocument,
    baseOptions,
  );
}
export function usePromotionDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PromotionDetailsQuery,
    PromotionDetailsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    PromotionDetailsQuery,
    PromotionDetailsQueryVariables
  >(PromotionDetailsDocument, baseOptions);
}
export type PromotionDetailsQueryHookResult = ReturnType<
  typeof usePromotionDetailsQuery
>;
export type PromotionDetailsLazyQueryHookResult = ReturnType<
  typeof usePromotionDetailsLazyQuery
>;
export type PromotionDetailsQueryResult = Apollo.QueryResult<
  PromotionDetailsQuery,
  PromotionDetailsQueryVariables
>;
export const SendStudentClaimMailDocument = gql`
  mutation sendStudentClaimMail($studentsIds: [uuid]!) {
    sendStudentClaimMail(studentsIds: $studentsIds) {
      nmbMailSent
    }
  }
`;
export type SendStudentClaimMailMutationFn = Apollo.MutationFunction<
  SendStudentClaimMailMutation,
  SendStudentClaimMailMutationVariables
>;

/**
 * __useSendStudentClaimMailMutation__
 *
 * To run a mutation, you first call `useSendStudentClaimMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendStudentClaimMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendStudentClaimMailMutation, { data, loading, error }] = useSendStudentClaimMailMutation({
 *   variables: {
 *      studentsIds: // value for 'studentsIds'
 *   },
 * });
 */
export function useSendStudentClaimMailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendStudentClaimMailMutation,
    SendStudentClaimMailMutationVariables
  >,
) {
  return Apollo.useMutation<
    SendStudentClaimMailMutation,
    SendStudentClaimMailMutationVariables
  >(SendStudentClaimMailDocument, baseOptions);
}
export type SendStudentClaimMailMutationHookResult = ReturnType<
  typeof useSendStudentClaimMailMutation
>;
export type SendStudentClaimMailMutationResult = Apollo.MutationResult<
  SendStudentClaimMailMutation
>;
export type SendStudentClaimMailMutationOptions = Apollo.BaseMutationOptions<
  SendStudentClaimMailMutation,
  SendStudentClaimMailMutationVariables
>;
export const ListPromotionsDocument = gql`
  query ListPromotions {
    promotion {
      id
      name
      years
      student_to_promotions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useListPromotionsQuery__
 *
 * To run a query within a React component, call `useListPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPromotionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPromotionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListPromotionsQuery,
    ListPromotionsQueryVariables
  >,
) {
  return Apollo.useQuery<ListPromotionsQuery, ListPromotionsQueryVariables>(
    ListPromotionsDocument,
    baseOptions,
  );
}
export function useListPromotionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPromotionsQuery,
    ListPromotionsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ListPromotionsQuery, ListPromotionsQueryVariables>(
    ListPromotionsDocument,
    baseOptions,
  );
}
export type ListPromotionsQueryHookResult = ReturnType<
  typeof useListPromotionsQuery
>;
export type ListPromotionsLazyQueryHookResult = ReturnType<
  typeof useListPromotionsLazyQuery
>;
export type ListPromotionsQueryResult = Apollo.QueryResult<
  ListPromotionsQuery,
  ListPromotionsQueryVariables
>;
export const CreatePromotionDocument = gql`
  mutation CreatePromotion(
    $name: String!
    $years: String!
    $students: [student_to_promotion_insert_input!]!
  ) {
    insert_promotion_one(
      object: {
        name: $name
        years: $years
        student_to_promotions: { data: $students }
      }
    ) {
      created_at
      id
    }
  }
`;
export type CreatePromotionMutationFn = Apollo.MutationFunction<
  CreatePromotionMutation,
  CreatePromotionMutationVariables
>;

/**
 * __useCreatePromotionMutation__
 *
 * To run a mutation, you first call `useCreatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPromotionMutation, { data, loading, error }] = useCreatePromotionMutation({
 *   variables: {
 *      name: // value for 'name'
 *      years: // value for 'years'
 *      students: // value for 'students'
 *   },
 * });
 */
export function useCreatePromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePromotionMutation,
    CreatePromotionMutationVariables
  >,
) {
  return Apollo.useMutation<
    CreatePromotionMutation,
    CreatePromotionMutationVariables
  >(CreatePromotionDocument, baseOptions);
}
export type CreatePromotionMutationHookResult = ReturnType<
  typeof useCreatePromotionMutation
>;
export type CreatePromotionMutationResult = Apollo.MutationResult<
  CreatePromotionMutation
>;
export type CreatePromotionMutationOptions = Apollo.BaseMutationOptions<
  CreatePromotionMutation,
  CreatePromotionMutationVariables
>;
export const InsertNewPracticeToPromotionDocument = gql`
  mutation insertNewPracticeToPromotion(
    $close_date: timestamptz!
    $open_date: timestamptz!
    $practice_id: uuid!
    $promotion_id: uuid!
  ) {
    insert_practice_to_promotion(
      objects: {
        can_student_see_feedback: false
        can_student_see_grade: false
        close_date: $close_date
        open_date: $open_date
        practice_id: $practice_id
        promotion_id: $promotion_id
      }
    ) {
      returning {
        id
      }
    }
  }
`;
export type InsertNewPracticeToPromotionMutationFn = Apollo.MutationFunction<
  InsertNewPracticeToPromotionMutation,
  InsertNewPracticeToPromotionMutationVariables
>;

/**
 * __useInsertNewPracticeToPromotionMutation__
 *
 * To run a mutation, you first call `useInsertNewPracticeToPromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNewPracticeToPromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewPracticeToPromotionMutation, { data, loading, error }] = useInsertNewPracticeToPromotionMutation({
 *   variables: {
 *      close_date: // value for 'close_date'
 *      open_date: // value for 'open_date'
 *      practice_id: // value for 'practice_id'
 *      promotion_id: // value for 'promotion_id'
 *   },
 * });
 */
export function useInsertNewPracticeToPromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertNewPracticeToPromotionMutation,
    InsertNewPracticeToPromotionMutationVariables
  >,
) {
  return Apollo.useMutation<
    InsertNewPracticeToPromotionMutation,
    InsertNewPracticeToPromotionMutationVariables
  >(InsertNewPracticeToPromotionDocument, baseOptions);
}
export type InsertNewPracticeToPromotionMutationHookResult = ReturnType<
  typeof useInsertNewPracticeToPromotionMutation
>;
export type InsertNewPracticeToPromotionMutationResult = Apollo.MutationResult<
  InsertNewPracticeToPromotionMutation
>;
export type InsertNewPracticeToPromotionMutationOptions = Apollo.BaseMutationOptions<
  InsertNewPracticeToPromotionMutation,
  InsertNewPracticeToPromotionMutationVariables
>;
export const GetPracticeDetailDocument = gql`
  subscription getPracticeDetail($id: uuid!) {
    practice_by_pk(id: $id) {
      title
      practice_yields_aggregate(order_by: { created_at: asc }) {
        aggregate {
          count
        }
        nodes {
          id
          name
          method
          meta
        }
      }
      practice_to_promotions_aggregate {
        aggregate {
          count
        }
        nodes {
          promotion {
            name
            years
            id
            student_to_promotions {
              student {
                full_name
                email
                practice_to_students(
                  where: {
                    practice_to_promotion: { practice_id: { _eq: $id } }
                  }
                ) {
                  created_at
                  grade
                }
              }
            }
          }
          can_student_see_feedback
          can_student_see_grade
          close_date
          created_at
          gitea_org_name
          is_open
          id
          open_date
          updated_at
        }
      }
    }
  }
`;

/**
 * __useGetPracticeDetailSubscription__
 *
 * To run a query within a React component, call `useGetPracticeDetailSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPracticeDetailSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPracticeDetailSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPracticeDetailSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetPracticeDetailSubscription,
    GetPracticeDetailSubscriptionVariables
  >,
) {
  return Apollo.useSubscription<
    GetPracticeDetailSubscription,
    GetPracticeDetailSubscriptionVariables
  >(GetPracticeDetailDocument, baseOptions);
}
export type GetPracticeDetailSubscriptionHookResult = ReturnType<
  typeof useGetPracticeDetailSubscription
>;
export type GetPracticeDetailSubscriptionResult = Apollo.SubscriptionResult<
  GetPracticeDetailSubscription
>;
export const GetPromotionForTpAddDocument = gql`
  query getPromotionForTpAdd {
    promotion(order_by: { updated_at: asc }) {
      id
      name
      years
    }
  }
`;

/**
 * __useGetPromotionForTpAddQuery__
 *
 * To run a query within a React component, call `useGetPromotionForTpAddQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionForTpAddQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionForTpAddQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPromotionForTpAddQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPromotionForTpAddQuery,
    GetPromotionForTpAddQueryVariables
  >,
) {
  return Apollo.useQuery<
    GetPromotionForTpAddQuery,
    GetPromotionForTpAddQueryVariables
  >(GetPromotionForTpAddDocument, baseOptions);
}
export function useGetPromotionForTpAddLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPromotionForTpAddQuery,
    GetPromotionForTpAddQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    GetPromotionForTpAddQuery,
    GetPromotionForTpAddQueryVariables
  >(GetPromotionForTpAddDocument, baseOptions);
}
export type GetPromotionForTpAddQueryHookResult = ReturnType<
  typeof useGetPromotionForTpAddQuery
>;
export type GetPromotionForTpAddLazyQueryHookResult = ReturnType<
  typeof useGetPromotionForTpAddLazyQuery
>;
export type GetPromotionForTpAddQueryResult = Apollo.QueryResult<
  GetPromotionForTpAddQuery,
  GetPromotionForTpAddQueryVariables
>;
export const ListPracticeDocument = gql`
  query ListPractice {
    practice {
      id
      title
      practice_to_promotions {
        id
        can_student_see_feedback
        can_student_see_grade
        close_date
        open_date
        promotion {
          name
          years
        }
      }
    }
  }
`;

/**
 * __useListPracticeQuery__
 *
 * To run a query within a React component, call `useListPracticeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPracticeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPracticeQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPracticeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListPracticeQuery,
    ListPracticeQueryVariables
  >,
) {
  return Apollo.useQuery<ListPracticeQuery, ListPracticeQueryVariables>(
    ListPracticeDocument,
    baseOptions,
  );
}
export function useListPracticeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPracticeQuery,
    ListPracticeQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ListPracticeQuery, ListPracticeQueryVariables>(
    ListPracticeDocument,
    baseOptions,
  );
}
export type ListPracticeQueryHookResult = ReturnType<
  typeof useListPracticeQuery
>;
export type ListPracticeLazyQueryHookResult = ReturnType<
  typeof useListPracticeLazyQuery
>;
export type ListPracticeQueryResult = Apollo.QueryResult<
  ListPracticeQuery,
  ListPracticeQueryVariables
>;
export const CreateNewPracticeDocument = gql`
  mutation createNewPractice(
    $title: String!
    $description: String!
    $data: [practice_yield_insert_input!]!
  ) {
    insert_practice_one(
      object: {
        title: $title
        description: $description
        practice_yields: { data: $data }
      }
    ) {
      created_at
      id
      title
      updated_at
    }
  }
`;
export type CreateNewPracticeMutationFn = Apollo.MutationFunction<
  CreateNewPracticeMutation,
  CreateNewPracticeMutationVariables
>;

/**
 * __useCreateNewPracticeMutation__
 *
 * To run a mutation, you first call `useCreateNewPracticeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewPracticeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewPracticeMutation, { data, loading, error }] = useCreateNewPracticeMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewPracticeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNewPracticeMutation,
    CreateNewPracticeMutationVariables
  >,
) {
  return Apollo.useMutation<
    CreateNewPracticeMutation,
    CreateNewPracticeMutationVariables
  >(CreateNewPracticeDocument, baseOptions);
}
export type CreateNewPracticeMutationHookResult = ReturnType<
  typeof useCreateNewPracticeMutation
>;
export type CreateNewPracticeMutationResult = Apollo.MutationResult<
  CreateNewPracticeMutation
>;
export type CreateNewPracticeMutationOptions = Apollo.BaseMutationOptions<
  CreateNewPracticeMutation,
  CreateNewPracticeMutationVariables
>;

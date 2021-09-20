import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  json: any;
  jsonb: any;
  numeric: any;
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

export type CommitItem = {
  __typename?: 'CommitItem';
  author_profile_picture?: Maybe<Scalars['String']>;
  commit_author_date?: Maybe<Scalars['String']>;
  commit_author_email?: Maybe<Scalars['String']>;
  commit_author_name?: Maybe<Scalars['String']>;
  commit_committer_date?: Maybe<Scalars['String']>;
  commit_committer_email?: Maybe<Scalars['String']>;
  commit_committer_name?: Maybe<Scalars['String']>;
  commit_message?: Maybe<Scalars['String']>;
  commit_tree_created?: Maybe<Scalars['String']>;
  commit_tree_sha?: Maybe<Scalars['String']>;
  commit_tree_url?: Maybe<Scalars['String']>;
  commit_url?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  html_url?: Maybe<Scalars['String']>;
  parents?: Maybe<Scalars['jsonb']>;
  sha?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FillEmptyYieldsOutput = {
  __typename?: 'FillEmptyYieldsOutput';
  affected_rows: Scalars['Int'];
};

export type GetGitFileDataOutput = {
  __typename?: 'GetGitFileDataOutput';
  content: Scalars['String'];
  download_url?: Maybe<Scalars['String']>;
  encoding: Scalars['String'];
  git_url?: Maybe<Scalars['String']>;
  html_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
  sha?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  submodule_git_url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GitFileInput = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
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

export type RefreshGradesOutput = {
  __typename?: 'RefreshGradesOutput';
  affected_rows: Scalars['Int'];
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

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  provider_account_id: Scalars['String'];
  provider_id: Scalars['String'];
  provider_type: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsCompoundIdKey = 'accounts_compound_id_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "allowed_roles" */
export type Allowed_Roles = {
  __typename?: 'allowed_roles';
  role: Roles_Enum;
  /** An object relationship */
  roleByRole: Roles;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "allowed_roles" */
export type Allowed_Roles_Aggregate = {
  __typename?: 'allowed_roles_aggregate';
  aggregate?: Maybe<Allowed_Roles_Aggregate_Fields>;
  nodes: Array<Allowed_Roles>;
};

/** aggregate fields of "allowed_roles" */
export type Allowed_Roles_Aggregate_Fields = {
  __typename?: 'allowed_roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Allowed_Roles_Max_Fields>;
  min?: Maybe<Allowed_Roles_Min_Fields>;
};

/** aggregate fields of "allowed_roles" */
export type Allowed_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allowed_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allowed_roles" */
export type Allowed_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Allowed_Roles_Max_Order_By>;
  min?: Maybe<Allowed_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "allowed_roles" */
export type Allowed_Roles_Arr_Rel_Insert_Input = {
  data: Array<Allowed_Roles_Insert_Input>;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "allowed_roles". All fields are combined with a logical 'AND'. */
export type Allowed_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Allowed_Roles_Bool_Exp>>>;
  _not?: Maybe<Allowed_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Allowed_Roles_Bool_Exp>>>;
  role?: Maybe<Roles_Enum_Comparison_Exp>;
  roleByRole?: Maybe<Roles_Bool_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "allowed_roles" */
export enum Allowed_Roles_Constraint {
  /** unique or primary key constraint */
  AllowedRolesPkey = 'allowed_roles_pkey',
}

/** input type for inserting data into table "allowed_roles" */
export type Allowed_Roles_Insert_Input = {
  role?: Maybe<Roles_Enum>;
  roleByRole?: Maybe<Roles_Obj_Rel_Insert_Input>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Allowed_Roles_Max_Fields = {
  __typename?: 'allowed_roles_max_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "allowed_roles" */
export type Allowed_Roles_Max_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Allowed_Roles_Min_Fields = {
  __typename?: 'allowed_roles_min_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "allowed_roles" */
export type Allowed_Roles_Min_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "allowed_roles" */
export type Allowed_Roles_Mutation_Response = {
  __typename?: 'allowed_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Allowed_Roles>;
};

/** input type for inserting object relation for remote table "allowed_roles" */
export type Allowed_Roles_Obj_Rel_Insert_Input = {
  data: Allowed_Roles_Insert_Input;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};

/** on conflict condition type for table "allowed_roles" */
export type Allowed_Roles_On_Conflict = {
  constraint: Allowed_Roles_Constraint;
  update_columns: Array<Allowed_Roles_Update_Column>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "allowed_roles" */
export type Allowed_Roles_Order_By = {
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Roles_Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "allowed_roles" */
export type Allowed_Roles_Pk_Columns_Input = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** select columns of table "allowed_roles" */
export enum Allowed_Roles_Select_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "allowed_roles" */
export type Allowed_Roles_Set_Input = {
  role?: Maybe<Roles_Enum>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "allowed_roles" */
export enum Allowed_Roles_Update_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "course" */
export type Course = {
  __typename?: 'course';
  can_student_see_feedback: Scalars['Boolean'];
  can_student_see_grade: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  practice_to_courses: Array<Practice_To_Course>;
  /** An aggregated array relationship */
  practice_to_courses_aggregate: Practice_To_Course_Aggregate;
  /** An array relationship */
  student_to_courses: Array<Student_To_Course>;
  /** An aggregated array relationship */
  student_to_courses_aggregate: Student_To_Course_Aggregate;
  updated_at: Scalars['timestamptz'];
  years: Scalars['String'];
};

/** columns and relationships of "course" */
export type CoursePractice_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CoursePractice_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CourseStudent_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CourseStudent_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** aggregated selection of "course" */
export type Course_Aggregate = {
  __typename?: 'course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

/** aggregate fields of "course" */
export type Course_Aggregate_Fields = {
  __typename?: 'course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
};

/** aggregate fields of "course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course" */
export type Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Max_Order_By>;
  min?: Maybe<Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "course" */
export type Course_Arr_Rel_Insert_Input = {
  data: Array<Course_Insert_Input>;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Course_Bool_Exp>>>;
  _not?: Maybe<Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Course_Bool_Exp>>>;
  can_student_see_feedback?: Maybe<Boolean_Comparison_Exp>;
  can_student_see_grade?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice_to_courses?: Maybe<Practice_To_Course_Bool_Exp>;
  student_to_courses?: Maybe<Student_To_Course_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  years?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "course" */
export enum Course_Constraint {
  /** unique or primary key constraint */
  PromotionNameYearsKey = 'promotion_name_years_key',
  /** unique or primary key constraint */
  PromotionPkey = 'promotion_pkey',
}

/** input type for inserting data into table "course" */
export type Course_Insert_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_to_courses?: Maybe<Practice_To_Course_Arr_Rel_Insert_Input>;
  student_to_courses?: Maybe<Student_To_Course_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'course_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "course" */
export type Course_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'course_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "course" */
export type Course_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** response of any mutation on the table "course" */
export type Course_Mutation_Response = {
  __typename?: 'course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type Course_Obj_Rel_Insert_Input = {
  data: Course_Insert_Input;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** on conflict condition type for table "course" */
export type Course_On_Conflict = {
  constraint: Course_Constraint;
  update_columns: Array<Course_Update_Column>;
  where?: Maybe<Course_Bool_Exp>;
};

/** ordering options when selecting data from "course" */
export type Course_Order_By = {
  can_student_see_feedback?: Maybe<Order_By>;
  can_student_see_grade?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_to_courses_aggregate?: Maybe<Practice_To_Course_Aggregate_Order_By>;
  student_to_courses_aggregate?: Maybe<Student_To_Course_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** primary key columns input for table: "course" */
export type Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course" */
export enum Course_Select_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
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

/** input type for updating data in table "course" */
export type Course_Set_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** update columns of table "course" */
export enum Course_Update_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
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

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
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
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "allowed_roles" */
  delete_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** delete single row from the table: "allowed_roles" */
  delete_allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** delete data from the table: "course" */
  delete_course?: Maybe<Course_Mutation_Response>;
  /** delete single row from the table: "course" */
  delete_course_by_pk?: Maybe<Course>;
  /** delete data from the table: "practice" */
  delete_practice?: Maybe<Practice_Mutation_Response>;
  /** delete single row from the table: "practice" */
  delete_practice_by_pk?: Maybe<Practice>;
  /** delete data from the table: "practice_to_course" */
  delete_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** delete single row from the table: "practice_to_course" */
  delete_practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** delete data from the table: "practice_to_student" */
  delete_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** delete single row from the table: "practice_to_student" */
  delete_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** delete data from the table: "practice_to_student_feedback" */
  delete_practice_to_student_feedback?: Maybe<Practice_To_Student_Feedback_Mutation_Response>;
  /** delete data from the table: "practice_to_student_grade" */
  delete_practice_to_student_grade?: Maybe<Practice_To_Student_Grade_Mutation_Response>;
  /** delete data from the table: "practice_to_student_grade_metric" */
  delete_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** delete single row from the table: "practice_to_student_grade_metric" */
  delete_practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** delete data from the table: "practice_to_student_yield" */
  delete_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_to_student_yield" */
  delete_practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** delete data from the table: "practice_yield" */
  delete_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_yield" */
  delete_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** delete data from the table: "practice_yield_expected_output" */
  delete_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** delete single row from the table: "practice_yield_expected_output" */
  delete_practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** delete data from the table: "practice_yield_expected_output_types" */
  delete_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** delete single row from the table: "practice_yield_expected_output_types" */
  delete_practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** delete data from the table: "practice_yield_grade_metric" */
  delete_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** delete single row from the table: "practice_yield_grade_metric" */
  delete_practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** delete data from the table: "practice_yield_type" */
  delete_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** delete single row from the table: "practice_yield_type" */
  delete_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "student_to_course" */
  delete_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** delete single row from the table: "student_to_course" */
  delete_student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** perform the action: "fillEmptyYields" */
  fillEmptyYields?: Maybe<FillEmptyYieldsOutput>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "allowed_roles" */
  insert_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** insert a single row into the table: "allowed_roles" */
  insert_allowed_roles_one?: Maybe<Allowed_Roles>;
  /** insert data into the table: "course" */
  insert_course?: Maybe<Course_Mutation_Response>;
  /** insert a single row into the table: "course" */
  insert_course_one?: Maybe<Course>;
  /** insert data into the table: "practice" */
  insert_practice?: Maybe<Practice_Mutation_Response>;
  /** insert a single row into the table: "practice" */
  insert_practice_one?: Maybe<Practice>;
  /** insert data into the table: "practice_to_course" */
  insert_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** insert a single row into the table: "practice_to_course" */
  insert_practice_to_course_one?: Maybe<Practice_To_Course>;
  /** insert data into the table: "practice_to_student" */
  insert_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** insert data into the table: "practice_to_student_feedback" */
  insert_practice_to_student_feedback?: Maybe<Practice_To_Student_Feedback_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_feedback" */
  insert_practice_to_student_feedback_one?: Maybe<Practice_To_Student_Feedback>;
  /** insert data into the table: "practice_to_student_grade" */
  insert_practice_to_student_grade?: Maybe<Practice_To_Student_Grade_Mutation_Response>;
  /** insert data into the table: "practice_to_student_grade_metric" */
  insert_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_grade_metric" */
  insert_practice_to_student_grade_metric_one?: Maybe<Practice_To_Student_Grade_Metric>;
  /** insert a single row into the table: "practice_to_student_grade" */
  insert_practice_to_student_grade_one?: Maybe<Practice_To_Student_Grade>;
  /** insert a single row into the table: "practice_to_student" */
  insert_practice_to_student_one?: Maybe<Practice_To_Student>;
  /** insert data into the table: "practice_to_student_yield" */
  insert_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_yield" */
  insert_practice_to_student_yield_one?: Maybe<Practice_To_Student_Yield>;
  /** insert data into the table: "practice_yield" */
  insert_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** insert data into the table: "practice_yield_expected_output" */
  insert_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_expected_output" */
  insert_practice_yield_expected_output_one?: Maybe<Practice_Yield_Expected_Output>;
  /** insert data into the table: "practice_yield_expected_output_types" */
  insert_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_expected_output_types" */
  insert_practice_yield_expected_output_types_one?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** insert data into the table: "practice_yield_grade_metric" */
  insert_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_grade_metric" */
  insert_practice_yield_grade_metric_one?: Maybe<Practice_Yield_Grade_Metric>;
  /** insert a single row into the table: "practice_yield" */
  insert_practice_yield_one?: Maybe<Practice_Yield>;
  /** insert data into the table: "practice_yield_type" */
  insert_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_type" */
  insert_practice_yield_type_one?: Maybe<Practice_Yield_Type>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "student_to_course" */
  insert_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** insert a single row into the table: "student_to_course" */
  insert_student_to_course_one?: Maybe<Student_To_Course>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** perform the action: "linkStudentToUser" */
  linkStudentToUser?: Maybe<LinkStudentToUserOutput>;
  /** perform the action: "refreshGrades" */
  refreshGrades?: Maybe<RefreshGradesOutput>;
  /** perform the action: "sendStudentClaimMail" */
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  /** perform the action: "submitHandoff" */
  submitHandoff?: Maybe<SubmitHandoffOutput>;
  /** update data of the table: "user" */
  updateUser?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "allowed_roles" */
  update_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** update single row of the table: "allowed_roles" */
  update_allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** update data of the table: "course" */
  update_course?: Maybe<Course_Mutation_Response>;
  /** update single row of the table: "course" */
  update_course_by_pk?: Maybe<Course>;
  /** update data of the table: "practice" */
  update_practice?: Maybe<Practice_Mutation_Response>;
  /** update single row of the table: "practice" */
  update_practice_by_pk?: Maybe<Practice>;
  /** update data of the table: "practice_to_course" */
  update_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** update single row of the table: "practice_to_course" */
  update_practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** update data of the table: "practice_to_student" */
  update_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** update single row of the table: "practice_to_student" */
  update_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** update data of the table: "practice_to_student_feedback" */
  update_practice_to_student_feedback?: Maybe<Practice_To_Student_Feedback_Mutation_Response>;
  /** update data of the table: "practice_to_student_grade" */
  update_practice_to_student_grade?: Maybe<Practice_To_Student_Grade_Mutation_Response>;
  /** update data of the table: "practice_to_student_grade_metric" */
  update_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** update single row of the table: "practice_to_student_grade_metric" */
  update_practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** update data of the table: "practice_to_student_yield" */
  update_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** update single row of the table: "practice_to_student_yield" */
  update_practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** update data of the table: "practice_yield" */
  update_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** update single row of the table: "practice_yield" */
  update_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** update data of the table: "practice_yield_expected_output" */
  update_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** update single row of the table: "practice_yield_expected_output" */
  update_practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** update data of the table: "practice_yield_expected_output_types" */
  update_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** update single row of the table: "practice_yield_expected_output_types" */
  update_practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** update data of the table: "practice_yield_grade_metric" */
  update_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** update single row of the table: "practice_yield_grade_metric" */
  update_practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** update data of the table: "practice_yield_type" */
  update_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** update single row of the table: "practice_yield_type" */
  update_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update data of the table: "student_to_course" */
  update_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** update single row of the table: "student_to_course" */
  update_student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
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
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Allowed_RolesArgs = {
  where: Allowed_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Allowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
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
export type Mutation_RootDelete_Practice_To_CourseArgs = {
  where: Practice_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Course_By_PkArgs = {
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
export type Mutation_RootDelete_Practice_To_Student_FeedbackArgs = {
  where: Practice_To_Student_Feedback_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_GradeArgs = {
  where: Practice_To_Student_Grade_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Grade_MetricArgs = {
  where: Practice_To_Student_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_YieldArgs = {
  where: Practice_To_Student_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Yield_By_PkArgs = {
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
export type Mutation_RootDelete_Practice_Yield_Expected_OutputArgs = {
  where: Practice_Yield_Expected_Output_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_TypesArgs = {
  where: Practice_Yield_Expected_Output_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Grade_MetricArgs = {
  where: Practice_Yield_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Grade_Metric_By_PkArgs = {
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
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  value: Scalars['String'];
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
export type Mutation_RootDelete_Student_To_CourseArgs = {
  where: Student_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootFillEmptyYieldsArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
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
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Allowed_RolesArgs = {
  objects: Array<Allowed_Roles_Insert_Input>;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Allowed_Roles_OneArgs = {
  object: Allowed_Roles_Insert_Input;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  on_conflict?: Maybe<Course_On_Conflict>;
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
export type Mutation_RootInsert_Practice_To_CourseArgs = {
  objects: Array<Practice_To_Course_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Course_OneArgs = {
  object: Practice_To_Course_Insert_Input;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_StudentArgs = {
  objects: Array<Practice_To_Student_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_FeedbackArgs = {
  objects: Array<Practice_To_Student_Feedback_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Feedback_OneArgs = {
  object: Practice_To_Student_Feedback_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_GradeArgs = {
  objects: Array<Practice_To_Student_Grade_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_MetricArgs = {
  objects: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_Metric_OneArgs = {
  object: Practice_To_Student_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_OneArgs = {
  object: Practice_To_Student_Grade_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_OneArgs = {
  object: Practice_To_Student_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_YieldArgs = {
  objects: Array<Practice_To_Student_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Yield_OneArgs = {
  object: Practice_To_Student_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_YieldArgs = {
  objects: Array<Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_OutputArgs = {
  objects: Array<Practice_Yield_Expected_Output_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_OneArgs = {
  object: Practice_Yield_Expected_Output_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_TypesArgs = {
  objects: Array<Practice_Yield_Expected_Output_Types_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_Types_OneArgs = {
  object: Practice_Yield_Expected_Output_Types_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Grade_MetricArgs = {
  objects: Array<Practice_Yield_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Grade_Metric_OneArgs = {
  object: Practice_Yield_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
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
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
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
export type Mutation_RootInsert_Student_To_CourseArgs = {
  objects: Array<Student_To_Course_Insert_Input>;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_Course_OneArgs = {
  object: Student_To_Course_Insert_Input;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLinkStudentToUserArgs = {
  linkId: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootRefreshGradesArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
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
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Allowed_RolesArgs = {
  _set?: Maybe<Allowed_Roles_Set_Input>;
  where: Allowed_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Allowed_Roles_By_PkArgs = {
  _set?: Maybe<Allowed_Roles_Set_Input>;
  pk_columns: Allowed_Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _set?: Maybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _set?: Maybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Practice_To_CourseArgs = {
  _set?: Maybe<Practice_To_Course_Set_Input>;
  where: Practice_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Course_By_PkArgs = {
  _set?: Maybe<Practice_To_Course_Set_Input>;
  pk_columns: Practice_To_Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_StudentArgs = {
  _append?: Maybe<Practice_To_Student_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_By_PkArgs = {
  _append?: Maybe<Practice_To_Student_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  pk_columns: Practice_To_Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_FeedbackArgs = {
  _append?: Maybe<Practice_To_Student_Feedback_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Feedback_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Feedback_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Feedback_Delete_Key_Input>;
  _prepend?: Maybe<Practice_To_Student_Feedback_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Feedback_Set_Input>;
  where: Practice_To_Student_Feedback_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_GradeArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Set_Input>;
  where: Practice_To_Student_Grade_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Grade_MetricArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Metric_Set_Input>;
  where: Practice_To_Student_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Grade_Metric_By_PkArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Metric_Set_Input>;
  pk_columns: Practice_To_Student_Grade_Metric_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_YieldArgs = {
  _set?: Maybe<Practice_To_Student_Yield_Set_Input>;
  where: Practice_To_Student_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Yield_By_PkArgs = {
  _set?: Maybe<Practice_To_Student_Yield_Set_Input>;
  pk_columns: Practice_To_Student_Yield_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Practice_Yield_Expected_OutputArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Set_Input>;
  where: Practice_Yield_Expected_Output_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Set_Input>;
  pk_columns: Practice_Yield_Expected_Output_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_TypesArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Types_Set_Input>;
  where: Practice_Yield_Expected_Output_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_Types_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Types_Set_Input>;
  pk_columns: Practice_Yield_Expected_Output_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Grade_MetricArgs = {
  _append?: Maybe<Practice_Yield_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_Yield_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_Yield_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Grade_Metric_Set_Input>;
  where: Practice_Yield_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Grade_Metric_By_PkArgs = {
  _append?: Maybe<Practice_Yield_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_Yield_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_Yield_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Grade_Metric_Set_Input>;
  pk_columns: Practice_Yield_Grade_Metric_Pk_Columns_Input;
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
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Student_To_CourseArgs = {
  _set?: Maybe<Student_To_Course_Set_Input>;
  where: Student_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_Course_By_PkArgs = {
  _set?: Maybe<Student_To_Course_Set_Input>;
  pk_columns: Student_To_Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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
  practice_to_courses: Array<Practice_To_Course>;
  /** An aggregated array relationship */
  practice_to_courses_aggregate: Practice_To_Course_Aggregate;
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice" */
export type PracticePractice_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
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
  practice_to_courses?: Maybe<Practice_To_Course_Bool_Exp>;
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
  practice_to_courses?: Maybe<Practice_To_Course_Arr_Rel_Insert_Input>;
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
  practice_to_courses_aggregate?: Maybe<Practice_To_Course_Aggregate_Order_By>;
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

/** columns and relationships of "practice_to_course" */
export type Practice_To_Course = {
  __typename?: 'practice_to_course';
  close_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  course: Course;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  gitea_org_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "is_open_practice_to_course_fn" */
  is_open?: Maybe<Scalars['Boolean']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_CoursePractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_CoursePractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** aggregated selection of "practice_to_course" */
export type Practice_To_Course_Aggregate = {
  __typename?: 'practice_to_course_aggregate';
  aggregate?: Maybe<Practice_To_Course_Aggregate_Fields>;
  nodes: Array<Practice_To_Course>;
};

/** aggregate fields of "practice_to_course" */
export type Practice_To_Course_Aggregate_Fields = {
  __typename?: 'practice_to_course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Course_Max_Fields>;
  min?: Maybe<Practice_To_Course_Min_Fields>;
};

/** aggregate fields of "practice_to_course" */
export type Practice_To_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_course" */
export type Practice_To_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Course_Max_Order_By>;
  min?: Maybe<Practice_To_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_course" */
export type Practice_To_Course_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Course_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_to_course". All fields are combined with a logical 'AND'. */
export type Practice_To_Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Course_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Course_Bool_Exp>>>;
  close_date?: Maybe<Timestamptz_Comparison_Exp>;
  course?: Maybe<Course_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  open_date?: Maybe<Timestamptz_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_course" */
export enum Practice_To_Course_Constraint {
  /** unique or primary key constraint */
  PracticeToPromotionPkey = 'practice_to_promotion_pkey',
  /** unique or primary key constraint */
  PracticeToPromotionPromotionIdPracticeIdKey = 'practice_to_promotion_promotion_id_practice_id_key',
}

/** input type for inserting data into table "practice_to_course" */
export type Practice_To_Course_Insert_Input = {
  close_date?: Maybe<Scalars['timestamptz']>;
  course?: Maybe<Course_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Course_Max_Fields = {
  __typename?: 'practice_to_course_max_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_course" */
export type Practice_To_Course_Max_Order_By = {
  close_date?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Course_Min_Fields = {
  __typename?: 'practice_to_course_min_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_course" */
export type Practice_To_Course_Min_Order_By = {
  close_date?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_course" */
export type Practice_To_Course_Mutation_Response = {
  __typename?: 'practice_to_course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Course>;
};

/** input type for inserting object relation for remote table "practice_to_course" */
export type Practice_To_Course_Obj_Rel_Insert_Input = {
  data: Practice_To_Course_Insert_Input;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** on conflict condition type for table "practice_to_course" */
export type Practice_To_Course_On_Conflict = {
  constraint: Practice_To_Course_Constraint;
  update_columns: Array<Practice_To_Course_Update_Column>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_course" */
export type Practice_To_Course_Order_By = {
  close_date?: Maybe<Order_By>;
  course?: Maybe<Course_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<Practice_To_Student_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_course" */
export type Practice_To_Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_course" */
export enum Practice_To_Course_Select_Column {
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CourseId = 'course_id',
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
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_course" */
export type Practice_To_Course_Set_Input = {
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "practice_to_course" */
export enum Practice_To_Course_Update_Column {
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CourseId = 'course_id',
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
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_to_student" */
export type Practice_To_Student = {
  __typename?: 'practice_to_student';
  course_practice_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_course: Practice_To_Course;
  /** An array relationship */
  practice_to_student_yields: Array<Practice_To_Student_Yield>;
  /** An aggregated array relationship */
  practice_to_student_yields_aggregate: Practice_To_Student_Yield_Aggregate;
  /** An object relationship */
  student: Student;
  /** An object relationship */
  student_feedback?: Maybe<Practice_To_Student_Feedback>;
  /** An object relationship */
  student_grade?: Maybe<Practice_To_Student_Grade>;
  student_id: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentGrade_DetailArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentPractice_To_Student_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentPractice_To_Student_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
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
  course_practice_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  grade?: Maybe<Float8_Comparison_Exp>;
  grade_detail?: Maybe<Jsonb_Comparison_Exp>;
  graded?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_course?: Maybe<Practice_To_Course_Bool_Exp>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_feedback?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
  student_grade?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
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

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_detail?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
  grade_detail?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
  grade_detail?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback = {
  __typename?: 'practice_to_student_feedback';
  feedback?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  practice_to_student?: Maybe<Practice_To_Student>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_feedback" */
export type Practice_To_Student_FeedbackFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate = {
  __typename?: 'practice_to_student_feedback_aggregate';
  aggregate?: Maybe<Practice_To_Student_Feedback_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Feedback>;
};

/** aggregate fields of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate_Fields = {
  __typename?: 'practice_to_student_feedback_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Feedback_Max_Fields>;
  min?: Maybe<Practice_To_Student_Feedback_Min_Fields>;
};

/** aggregate fields of "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Feedback_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Feedback_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Feedback_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Feedback_Insert_Input>;
};

/** Boolean expression to filter rows from the table "practice_to_student_feedback". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Feedback_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Feedback_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Feedback_Bool_Exp>>>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Feedback_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Feedback_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Feedback_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Insert_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Feedback_Max_Fields = {
  __typename?: 'practice_to_student_feedback_max_fields';
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Max_Order_By = {
  practice_to_student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Feedback_Min_Fields = {
  __typename?: 'practice_to_student_feedback_min_fields';
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Min_Order_By = {
  practice_to_student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Mutation_Response = {
  __typename?: 'practice_to_student_feedback_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Feedback>;
};

/** input type for inserting object relation for remote table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Feedback_Insert_Input;
};

/** ordering options when selecting data from "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Order_By = {
  feedback?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Feedback_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_feedback" */
export enum Practice_To_Student_Feedback_Select_Column {
  /** column name */
  Feedback = 'feedback',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
}

/** input type for updating data in table "practice_to_student_feedback" */
export type Practice_To_Student_Feedback_Set_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_grade" */
export type Practice_To_Student_Grade = {
  __typename?: 'practice_to_student_grade';
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  practice_to_student?: Maybe<Practice_To_Student>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "practice_to_student_grade" */
export type Practice_To_Student_GradeGrade_DetailArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate = {
  __typename?: 'practice_to_student_grade_aggregate';
  aggregate?: Maybe<Practice_To_Student_Grade_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Grade>;
};

/** aggregate fields of "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate_Fields = {
  __typename?: 'practice_to_student_grade_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Grade_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Grade_Max_Fields>;
  min?: Maybe<Practice_To_Student_Grade_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Grade_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Grade_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Grade_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Grade_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Grade_Variance_Fields>;
};

/** aggregate fields of "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Grade_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Grade_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Grade_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Grade_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Grade_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Grade_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Grade_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Grade_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Append_Input = {
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Grade_Insert_Input>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Grade_Avg_Fields = {
  __typename?: 'practice_to_student_grade_avg_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Avg_Order_By = {
  grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Grade_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Grade_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Grade_Bool_Exp>>>;
  grade?: Maybe<Float8_Comparison_Exp>;
  grade_detail?: Maybe<Jsonb_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Grade_Delete_At_Path_Input = {
  grade_detail?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Grade_Delete_Elem_Input = {
  grade_detail?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Grade_Delete_Key_Input = {
  grade_detail?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Inc_Input = {
  grade?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Insert_Input = {
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Grade_Max_Fields = {
  __typename?: 'practice_to_student_grade_max_fields';
  grade?: Maybe<Scalars['float8']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Max_Order_By = {
  grade?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric = {
  __typename?: 'practice_to_student_grade_metric';
  created_at: Scalars['timestamptz'];
  feedback: Scalars['jsonb'];
  id: Scalars['uuid'];
  percent_grade: Scalars['numeric'];
  /** An object relationship */
  practice_to_student_yield: Practice_To_Student_Yield;
  practice_to_student_yield_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield_grade_metric: Practice_Yield_Grade_Metric;
  practice_yield_grade_metric_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_MetricFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate = {
  __typename?: 'practice_to_student_grade_metric_aggregate';
  aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Grade_Metric>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_Fields = {
  __typename?: 'practice_to_student_grade_metric_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Grade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Grade_Metric_Max_Fields>;
  min?: Maybe<Practice_To_Student_Grade_Metric_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Grade_Metric_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Grade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Grade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Grade_Metric_Variance_Fields>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Grade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Grade_Metric_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Grade_Metric_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Grade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Grade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Grade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Grade_Metric_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Metric_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Grade_Metric_Avg_Fields = {
  __typename?: 'practice_to_student_grade_metric_avg_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Avg_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade_metric". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Grade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  percent_grade?: Maybe<Numeric_Comparison_Exp>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  practice_to_student_yield_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  practice_yield_grade_metric_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Constraint {
  /** unique or primary key constraint */
  PracticeToStudentGradeMetricPkey = 'practice_to_student_grade_metric_pkey',
  /** unique or primary key constraint */
  PracticeToStudentGradeMetricPracticeYieldGradeMetricId = 'practice_to_student_grade_metric_practice_yield_grade_metric_id',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Grade_Metric_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Grade_Metric_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Grade_Metric_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Inc_Input = {
  percent_grade?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Obj_Rel_Insert_Input>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Obj_Rel_Insert_Input>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Grade_Metric_Max_Fields = {
  __typename?: 'practice_to_student_grade_metric_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Grade_Metric_Min_Fields = {
  __typename?: 'practice_to_student_grade_metric_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Mutation_Response = {
  __typename?: 'practice_to_student_grade_metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Grade_Metric>;
};

/** input type for inserting object relation for remote table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** on conflict condition type for table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_On_Conflict = {
  constraint: Practice_To_Student_Grade_Metric_Constraint;
  update_columns: Array<Practice_To_Student_Grade_Metric_Update_Column>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Metric_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percent_grade',
  /** column name */
  PracticeToStudentYieldId = 'practice_to_student_yield_id',
  /** column name */
  PracticeYieldGradeMetricId = 'practice_yield_grade_metric_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_pop_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Pop_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_samp_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Samp_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Grade_Metric_Sum_Fields = {
  __typename?: 'practice_to_student_grade_metric_sum_fields';
  percent_grade?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Sum_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percent_grade',
  /** column name */
  PracticeToStudentYieldId = 'practice_to_student_yield_id',
  /** column name */
  PracticeYieldGradeMetricId = 'practice_yield_grade_metric_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_To_Student_Grade_Metric_Var_Pop_Fields = {
  __typename?: 'practice_to_student_grade_metric_var_pop_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Var_Pop_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Grade_Metric_Var_Samp_Fields = {
  __typename?: 'practice_to_student_grade_metric_var_samp_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Var_Samp_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Grade_Metric_Variance_Fields = {
  __typename?: 'practice_to_student_grade_metric_variance_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Variance_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Grade_Min_Fields = {
  __typename?: 'practice_to_student_grade_min_fields';
  grade?: Maybe<Scalars['float8']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Min_Order_By = {
  grade?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Mutation_Response = {
  __typename?: 'practice_to_student_grade_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Grade>;
};

/** input type for inserting object relation for remote table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Grade_Insert_Input;
};

/** ordering options when selecting data from "practice_to_student_grade" */
export type Practice_To_Student_Grade_Order_By = {
  grade?: Maybe<Order_By>;
  grade_detail?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Prepend_Input = {
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade" */
export enum Practice_To_Student_Grade_Select_Column {
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
}

/** input type for updating data in table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Set_Input = {
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Grade_Stddev_Fields = {
  __typename?: 'practice_to_student_grade_stddev_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Stddev_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Grade_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_grade_stddev_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Stddev_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Grade_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_grade_stddev_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Stddev_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Grade_Sum_Fields = {
  __typename?: 'practice_to_student_grade_sum_fields';
  grade?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Practice_To_Student_Grade_Var_Pop_Fields = {
  __typename?: 'practice_to_student_grade_var_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Var_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Grade_Var_Samp_Fields = {
  __typename?: 'practice_to_student_grade_var_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Var_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Grade_Variance_Fields = {
  __typename?: 'practice_to_student_grade_variance_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student_grade" */
export type Practice_To_Student_Grade_Variance_Order_By = {
  grade?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "practice_to_student" */
export type Practice_To_Student_Inc_Input = {
  grade?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student" */
export type Practice_To_Student_Insert_Input = {
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_course?: Maybe<Practice_To_Course_Obj_Rel_Insert_Input>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Arr_Rel_Insert_Input>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_feedback?: Maybe<Practice_To_Student_Feedback_Obj_Rel_Insert_Input>;
  student_grade?: Maybe<Practice_To_Student_Grade_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Max_Fields = {
  __typename?: 'practice_to_student_max_fields';
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student" */
export type Practice_To_Student_Max_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Min_Fields = {
  __typename?: 'practice_to_student_min_fields';
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student" */
export type Practice_To_Student_Min_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  grade_detail?: Maybe<Order_By>;
  graded?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_course?: Maybe<Practice_To_Course_Order_By>;
  practice_to_student_yields_aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Order_By>;
  student?: Maybe<Student_Order_By>;
  student_feedback?: Maybe<Practice_To_Student_Feedback_Order_By>;
  student_grade?: Maybe<Practice_To_Student_Grade_Order_By>;
  student_id?: Maybe<Order_By>;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student" */
export type Practice_To_Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student" */
export enum Practice_To_Student_Select_Column {
  /** column name */
  CoursePracticeId = 'course_practice_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student" */
export type Practice_To_Student_Set_Input = {
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
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
  grade?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "practice_to_student" */
export type Practice_To_Student_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student" */
export enum Practice_To_Student_Update_Column {
  /** column name */
  CoursePracticeId = 'course_practice_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
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

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_Yield = {
  __typename?: 'practice_to_student_yield';
  created_at: Scalars['timestamptz'];
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_student: Practice_To_Student;
  /** An array relationship */
  practice_to_student_grade_metrics: Array<Practice_To_Student_Grade_Metric>;
  /** An aggregated array relationship */
  practice_to_student_grade_metrics_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  practice_to_student_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield: Practice_Yield;
  practice_yield_id: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_YieldPractice_To_Student_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_YieldPractice_To_Student_Grade_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** aggregated selection of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate = {
  __typename?: 'practice_to_student_yield_aggregate';
  aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Yield>;
};

/** aggregate fields of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_Fields = {
  __typename?: 'practice_to_student_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Yield_Max_Fields>;
  min?: Maybe<Practice_To_Student_Yield_Min_Fields>;
};

/** aggregate fields of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Yield_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Yield_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_to_student_yield". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Yield_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_and_repo?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  submited?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Constraint {
  /** unique or primary key constraint */
  StudentPracticeYieldPkey = 'student_practice_yield_pkey',
  /** unique or primary key constraint */
  StudentPracticeYieldPracticeYieldIdPracticeToStudenKey = 'student_practice_yield_practice_yield_id_practice_to_studen_key',
}

/** input type for inserting data into table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Yield_Max_Fields = {
  __typename?: 'practice_to_student_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Yield_Min_Fields = {
  __typename?: 'practice_to_student_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Mutation_Response = {
  __typename?: 'practice_to_student_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Yield>;
};

/** input type for inserting object relation for remote table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** on conflict condition type for table "practice_to_student_yield" */
export type Practice_To_Student_Yield_On_Conflict = {
  constraint: Practice_To_Student_Yield_Constraint;
  update_columns: Array<Practice_To_Student_Yield_Update_Column>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student_yield" */
export type Practice_To_Student_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_grade_metrics_aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student_yield" */
export type Practice_To_Student_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Select_Column {
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
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Update_Column {
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
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

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
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  method: Practice_Yield_Type_Enum;
  name: Scalars['String'];
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_student_yields: Array<Practice_To_Student_Yield>;
  /** An aggregated array relationship */
  practice_to_student_yields_aggregate: Practice_To_Student_Yield_Aggregate;
  /** An array relationship */
  practice_yield_expected_outputs: Array<Practice_Yield_Expected_Output>;
  /** An aggregated array relationship */
  practice_yield_expected_outputs_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** An object relationship */
  practice_yield_type: Practice_Yield_Type;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_To_Student_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_To_Student_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_Yield_Expected_OutputsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_Yield_Expected_Outputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
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
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Bool_Exp>;
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

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output = {
  __typename?: 'practice_yield_expected_output';
  code_lang?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  method: Practice_Yield_Expected_Output_Types_Enum;
  /** An object relationship */
  practice_yield: Practice_Yield;
  /** An object relationship */
  practice_yield_expected_output_type: Practice_Yield_Expected_Output_Types;
  /** An array relationship */
  practice_yield_grade_metrics: Array<Practice_Yield_Grade_Metric>;
  /** An aggregated array relationship */
  practice_yield_grade_metrics_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  practice_yield_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_OutputPractice_Yield_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_OutputPractice_Yield_Grade_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** aggregated selection of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate = {
  __typename?: 'practice_yield_expected_output_aggregate';
  aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Expected_Output>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_Fields = {
  __typename?: 'practice_yield_expected_output_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Expected_Output_Max_Fields>;
  min?: Maybe<Practice_Yield_Expected_Output_Min_Fields>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Expected_Output_Max_Order_By>;
  min?: Maybe<Practice_Yield_Expected_Output_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Expected_Output_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Expected_Output_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Bool_Exp>>>;
  code_lang?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expected?: Maybe<String_Comparison_Exp>;
  git_path?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  practice_yield_grade_metrics?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Constraint {
  /** unique or primary key constraint */
  PracticeYieldExpectedOutputPkey = 'practice_yield_expected_output_pkey',
  /** unique or primary key constraint */
  PracticeYieldExpectedOutputPracticeYieldIdGitPathMetho = 'practice_yield_expected_output_practice_yield_id_git_path_metho',
}

/** input type for inserting data into table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Insert_Input = {
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Obj_Rel_Insert_Input>;
  practice_yield_grade_metrics?: Maybe<Practice_Yield_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Expected_Output_Max_Fields = {
  __typename?: 'practice_yield_expected_output_max_fields';
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Max_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Expected_Output_Min_Fields = {
  __typename?: 'practice_yield_expected_output_min_fields';
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Min_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Mutation_Response = {
  __typename?: 'practice_yield_expected_output_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Expected_Output>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Expected_Output_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_On_Conflict = {
  constraint: Practice_Yield_Expected_Output_Constraint;
  update_columns: Array<Practice_Yield_Expected_Output_Update_Column>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  method?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Order_By>;
  practice_yield_grade_metrics_aggregate?: Maybe<Practice_Yield_Grade_Metric_Aggregate_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Select_Column {
  /** column name */
  CodeLang = 'code_lang',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'git_path',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Set_Input = {
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types = {
  __typename?: 'practice_yield_expected_output_types';
  name: Scalars['String'];
  /** An array relationship */
  practice_yield_expected_outputs: Array<Practice_Yield_Expected_Output>;
  /** An aggregated array relationship */
  practice_yield_expected_outputs_aggregate: Practice_Yield_Expected_Output_Aggregate;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_TypesPractice_Yield_Expected_OutputsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_TypesPractice_Yield_Expected_Outputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** aggregated selection of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate = {
  __typename?: 'practice_yield_expected_output_types_aggregate';
  aggregate?: Maybe<Practice_Yield_Expected_Output_Types_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Expected_Output_Types>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_Fields = {
  __typename?: 'practice_yield_expected_output_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Expected_Output_Types_Max_Fields>;
  min?: Maybe<Practice_Yield_Expected_Output_Types_Min_Fields>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Expected_Output_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Expected_Output_Types_Max_Order_By>;
  min?: Maybe<Practice_Yield_Expected_Output_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Expected_Output_Types_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output_types". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Expected_Output_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Constraint {
  /** unique or primary key constraint */
  PracticeGradeMetricTypePkey = 'practice_grade_metric_type_pkey',
}

export enum Practice_Yield_Expected_Output_Types_Enum {
  CompareCodeFile = 'COMPARE_CODE_FILE',
  CompareGitFile = 'COMPARE_GIT_FILE',
  LinkOpen = 'LINK_OPEN',
  Manual = 'MANUAL',
  ManualGitFileReview = 'MANUAL_GIT_FILE_REVIEW',
  ShowGitFile = 'SHOW_GIT_FILE',
  ShowGitLog = 'SHOW_GIT_LOG',
}

/** expression to compare columns of type practice_yield_expected_output_types_enum. All fields are combined with logical 'AND'. */
export type Practice_Yield_Expected_Output_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  _in?: Maybe<Array<Practice_Yield_Expected_Output_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  _nin?: Maybe<Array<Practice_Yield_Expected_Output_Types_Enum>>;
};

/** input type for inserting data into table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Practice_Yield_Expected_Output_Types_Max_Fields = {
  __typename?: 'practice_yield_expected_output_types_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Expected_Output_Types_Min_Fields = {
  __typename?: 'practice_yield_expected_output_types_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Mutation_Response = {
  __typename?: 'practice_yield_expected_output_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Expected_Output_Types>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Expected_Output_Types_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_On_Conflict = {
  constraint: Practice_Yield_Expected_Output_Types_Constraint;
  update_columns: Array<Practice_Yield_Expected_Output_Types_Update_Column>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Order_By = {
  name?: Maybe<Order_By>;
  practice_yield_expected_outputs_aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Order_By>;
};

/** primary key columns input for table: "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Update_Column {
  /** column name */
  Name = 'name',
}

/** update columns of table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Update_Column {
  /** column name */
  CodeLang = 'code_lang',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'git_path',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric = {
  __typename?: 'practice_yield_grade_metric';
  created_at: Scalars['timestamptz'];
  expected_yield_id: Scalars['uuid'];
  feedbacks: Scalars['jsonb'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  points: Scalars['Int'];
  /** An array relationship */
  practice_to_student_grade_metrics: Array<Practice_To_Student_Grade_Metric>;
  /** An aggregated array relationship */
  practice_to_student_grade_metrics_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** An object relationship */
  practice_yield_expected_output: Practice_Yield_Expected_Output;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricFeedbacksArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricPractice_To_Student_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricPractice_To_Student_Grade_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** aggregated selection of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate = {
  __typename?: 'practice_yield_grade_metric_aggregate';
  aggregate?: Maybe<Practice_Yield_Grade_Metric_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Grade_Metric>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_Fields = {
  __typename?: 'practice_yield_grade_metric_aggregate_fields';
  avg?: Maybe<Practice_Yield_Grade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Grade_Metric_Max_Fields>;
  min?: Maybe<Practice_Yield_Grade_Metric_Min_Fields>;
  stddev?: Maybe<Practice_Yield_Grade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_Yield_Grade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_Yield_Grade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_Yield_Grade_Metric_Sum_Fields>;
  var_pop?: Maybe<Practice_Yield_Grade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_Yield_Grade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Practice_Yield_Grade_Metric_Variance_Fields>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Practice_Yield_Grade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Grade_Metric_Max_Order_By>;
  min?: Maybe<Practice_Yield_Grade_Metric_Min_Order_By>;
  stddev?: Maybe<Practice_Yield_Grade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_Yield_Grade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_Yield_Grade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_Yield_Grade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Practice_Yield_Grade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_Yield_Grade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Practice_Yield_Grade_Metric_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Grade_Metric_Append_Input = {
  feedbacks?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** aggregate avg on columns */
export type Practice_Yield_Grade_Metric_Avg_Fields = {
  __typename?: 'practice_yield_grade_metric_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Avg_Order_By = {
  points?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_yield_grade_metric". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Grade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Grade_Metric_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Grade_Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expected_yield_id?: Maybe<Uuid_Comparison_Exp>;
  feedbacks?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Constraint {
  /** unique or primary key constraint */
  PracticeGradeMetricPkey = 'practice_grade_metric_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_Yield_Grade_Metric_Delete_At_Path_Input = {
  feedbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_Yield_Grade_Metric_Delete_Elem_Input = {
  feedbacks?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_Yield_Grade_Metric_Delete_Key_Input = {
  feedbacks?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  feedbacks?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Grade_Metric_Max_Fields = {
  __typename?: 'practice_yield_grade_metric_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Grade_Metric_Min_Fields = {
  __typename?: 'practice_yield_grade_metric_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Mutation_Response = {
  __typename?: 'practice_yield_grade_metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Grade_Metric>;
};

/** input type for inserting object relation for remote table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_On_Conflict = {
  constraint: Practice_Yield_Grade_Metric_Constraint;
  update_columns: Array<Practice_Yield_Grade_Metric_Update_Column>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  feedbacks?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  practice_to_student_grade_metrics_aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Order_By>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Grade_Metric_Prepend_Input = {
  feedbacks?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpectedYieldId = 'expected_yield_id',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  feedbacks?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_Yield_Grade_Metric_Stddev_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_Yield_Grade_Metric_Stddev_Pop_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_Yield_Grade_Metric_Stddev_Samp_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_Yield_Grade_Metric_Sum_Fields = {
  __typename?: 'practice_yield_grade_metric_sum_fields';
  points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Sum_Order_By = {
  points?: Maybe<Order_By>;
};

/** update columns of table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpectedYieldId = 'expected_yield_id',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_Yield_Grade_Metric_Var_Pop_Fields = {
  __typename?: 'practice_yield_grade_metric_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_Yield_Grade_Metric_Var_Samp_Fields = {
  __typename?: 'practice_yield_grade_metric_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_Yield_Grade_Metric_Variance_Fields = {
  __typename?: 'practice_yield_grade_metric_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Variance_Order_By = {
  points?: Maybe<Order_By>;
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
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Arr_Rel_Insert_Input>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Arr_Rel_Insert_Input>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Obj_Rel_Insert_Input>;
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
  practice_to_student_yields_aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Order_By>;
  practice_yield_expected_outputs_aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Order_By>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Order_By>;
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
  Code = 'CODE',
  GitRepo = 'GIT_REPO',
  Url = 'URL',
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

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "allowed_roles" */
  allowed_roles: Array<Allowed_Roles>;
  /** fetch aggregated fields from the table: "allowed_roles" */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** perform the action: "getGitFileData" */
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  /** perform the action: "getGitLogData" */
  getGitLogData: Array<CommitItem>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practice_to_course: Array<Practice_To_Course>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practice_to_course_aggregate: Practice_To_Course_Aggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_to_student_feedback" */
  practice_to_student_feedback: Array<Practice_To_Student_Feedback>;
  /** fetch aggregated fields from the table: "practice_to_student_feedback" */
  practice_to_student_feedback_aggregate: Practice_To_Student_Feedback_Aggregate;
  /** fetch data from the table: "practice_to_student_grade" */
  practice_to_student_grade: Array<Practice_To_Student_Grade>;
  /** fetch aggregated fields from the table: "practice_to_student_grade" */
  practice_to_student_grade_aggregate: Practice_To_Student_Grade_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric: Array<Practice_To_Student_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practice_to_student_yield: Array<Practice_To_Student_Yield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practice_to_student_yield_aggregate: Practice_To_Student_Yield_Aggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practice_yield_expected_output: Array<Practice_Yield_Expected_Output>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practice_yield_expected_output_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types: Array<Practice_Yield_Expected_Output_Types>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types_aggregate: Practice_Yield_Expected_Output_Types_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric: Array<Practice_Yield_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  student_to_course: Array<Student_To_Course>;
  /** fetch aggregated fields from the table: "student_to_course" */
  student_to_course_aggregate: Student_To_Course_Aggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** query root */
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** query root */
export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** query root */
export type Query_RootAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** query root */
export type Query_RootAllowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** query root */
export type Query_RootCourseArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** query root */
export type Query_RootCourse_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** query root */
export type Query_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** query root */
export type Query_RootGetGitLogDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
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
export type Query_RootPractice_To_CourseArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Course_By_PkArgs = {
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
export type Query_RootPractice_To_Student_FeedbackArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Feedback_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_GradeArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_Student_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Yield_By_PkArgs = {
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
export type Query_RootPractice_Yield_Expected_OutputArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_TypesArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_Types_AggregateArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootPractice_Yield_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Grade_Metric_By_PkArgs = {
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
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_By_PkArgs = {
  value: Scalars['String'];
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
export type Query_RootStudent_To_CourseArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
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

/** query root */
export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  /** An array relationship */
  allowed_roles: Array<Allowed_Roles>;
  /** An aggregated array relationship */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
  value: Scalars['String'];
};

/** columns and relationships of "roles" */
export type RolesAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  allowed_roles?: Maybe<Allowed_Roles_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey',
}

export enum Roles_Enum {
  Student = 'student',
  Teacher = 'teacher',
}

/** expression to compare columns of type roles_enum. All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>;
  _in?: Maybe<Array<Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Roles_Enum>;
  _nin?: Maybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  allowed_roles?: Maybe<Allowed_Roles_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  allowed_roles_aggregate?: Maybe<Allowed_Roles_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

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
  student_to_courses: Array<Student_To_Course>;
  /** An aggregated array relationship */
  student_to_courses_aggregate: Student_To_Course_Aggregate;
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
export type StudentStudent_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
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
  student_to_courses?: Maybe<Student_To_Course_Bool_Exp>;
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
  student_to_courses?: Maybe<Student_To_Course_Arr_Rel_Insert_Input>;
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
  practice_to_students_aggregate?: Maybe<Practice_To_Student_Aggregate_Order_By>;
  student_to_courses_aggregate?: Maybe<Student_To_Course_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "student" */
export type Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

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

/** columns and relationships of "student_to_course" */
export type Student_To_Course = {
  __typename?: 'student_to_course';
  /** An object relationship */
  course: Course;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  student: Student;
  student_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "student_to_course" */
export type Student_To_Course_Aggregate = {
  __typename?: 'student_to_course_aggregate';
  aggregate?: Maybe<Student_To_Course_Aggregate_Fields>;
  nodes: Array<Student_To_Course>;
};

/** aggregate fields of "student_to_course" */
export type Student_To_Course_Aggregate_Fields = {
  __typename?: 'student_to_course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_To_Course_Max_Fields>;
  min?: Maybe<Student_To_Course_Min_Fields>;
};

/** aggregate fields of "student_to_course" */
export type Student_To_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_To_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student_to_course" */
export type Student_To_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_To_Course_Max_Order_By>;
  min?: Maybe<Student_To_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student_to_course" */
export type Student_To_Course_Arr_Rel_Insert_Input = {
  data: Array<Student_To_Course_Insert_Input>;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student_to_course". All fields are combined with a logical 'AND'. */
export type Student_To_Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_To_Course_Bool_Exp>>>;
  _not?: Maybe<Student_To_Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_To_Course_Bool_Exp>>>;
  course?: Maybe<Course_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_to_course" */
export enum Student_To_Course_Constraint {
  /** unique or primary key constraint */
  StudentToPromotionPkey = 'student_to_promotion_pkey',
  /** unique or primary key constraint */
  StudentToPromotionPromotionIdStudentIdKey = 'student_to_promotion_promotion_id_student_id_key',
}

/** input type for inserting data into table "student_to_course" */
export type Student_To_Course_Insert_Input = {
  course?: Maybe<Course_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Student_To_Course_Max_Fields = {
  __typename?: 'student_to_course_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "student_to_course" */
export type Student_To_Course_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_To_Course_Min_Fields = {
  __typename?: 'student_to_course_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "student_to_course" */
export type Student_To_Course_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_to_course" */
export type Student_To_Course_Mutation_Response = {
  __typename?: 'student_to_course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student_To_Course>;
};

/** input type for inserting object relation for remote table "student_to_course" */
export type Student_To_Course_Obj_Rel_Insert_Input = {
  data: Student_To_Course_Insert_Input;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** on conflict condition type for table "student_to_course" */
export type Student_To_Course_On_Conflict = {
  constraint: Student_To_Course_Constraint;
  update_columns: Array<Student_To_Course_Update_Column>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** ordering options when selecting data from "student_to_course" */
export type Student_To_Course_Order_By = {
  course?: Maybe<Course_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "student_to_course" */
export type Student_To_Course_Pk_Columns_Input = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** select columns of table "student_to_course" */
export enum Student_To_Course_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "student_to_course" */
export type Student_To_Course_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "student_to_course" */
export enum Student_To_Course_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
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
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "allowed_roles" */
  allowed_roles: Array<Allowed_Roles>;
  /** fetch aggregated fields from the table: "allowed_roles" */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** perform the action: "getGitFileData" */
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  /** perform the action: "getGitLogData" */
  getGitLogData: Array<CommitItem>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practice_to_course: Array<Practice_To_Course>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practice_to_course_aggregate: Practice_To_Course_Aggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_to_student_feedback" */
  practice_to_student_feedback: Array<Practice_To_Student_Feedback>;
  /** fetch aggregated fields from the table: "practice_to_student_feedback" */
  practice_to_student_feedback_aggregate: Practice_To_Student_Feedback_Aggregate;
  /** fetch data from the table: "practice_to_student_grade" */
  practice_to_student_grade: Array<Practice_To_Student_Grade>;
  /** fetch aggregated fields from the table: "practice_to_student_grade" */
  practice_to_student_grade_aggregate: Practice_To_Student_Grade_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric: Array<Practice_To_Student_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practice_to_student_yield: Array<Practice_To_Student_Yield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practice_to_student_yield_aggregate: Practice_To_Student_Yield_Aggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practice_yield_expected_output: Array<Practice_Yield_Expected_Output>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practice_yield_expected_output_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types: Array<Practice_Yield_Expected_Output_Types>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types_aggregate: Practice_Yield_Expected_Output_Types_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric: Array<Practice_Yield_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  student_to_course: Array<Student_To_Course>;
  /** fetch aggregated fields from the table: "student_to_course" */
  student_to_course_aggregate: Student_To_Course_Aggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** subscription root */
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAllowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootCourseArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootGetGitLogDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
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
export type Subscription_RootPractice_To_CourseArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Course_By_PkArgs = {
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
export type Subscription_RootPractice_To_Student_FeedbackArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Feedback_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Feedback_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Feedback_Order_By>>;
  where?: Maybe<Practice_To_Student_Feedback_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_GradeArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_Student_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Yield_By_PkArgs = {
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
export type Subscription_RootPractice_Yield_Expected_OutputArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_TypesArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_Types_AggregateArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_Metric_By_PkArgs = {
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
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  value: Scalars['String'];
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
export type Subscription_RootStudent_To_CourseArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
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

/** subscription root */
export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVerification_Requests_By_PkArgs = {
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
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregated array relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** An array relationship */
  allowed_roles: Array<Allowed_Roles>;
  /** An aggregated array relationship */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  createdAt: Scalars['timestamptz'];
  default_role: Roles_Enum;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  role: Roles;
  /** An object relationship */
  student?: Maybe<Student>;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "user" */
export type UserAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
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
  accounts?: Maybe<Accounts_Bool_Exp>;
  allowed_roles?: Maybe<Allowed_Roles_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<Roles_Enum_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  allowed_roles?: Maybe<Allowed_Roles_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Roles_Enum>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  allowed_roles_aggregate?: Maybe<Allowed_Roles_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
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
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Roles_Enum>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
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

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verification_requests" */
export type Verification_Requests_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Verification_Requests_Max_Order_By>;
  min?: Maybe<Verification_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verification_requests" */
export type Verification_Requests_Arr_Rel_Insert_Input = {
  data: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey',
  /** unique or primary key constraint */
  VerificationRequestsTokenKey = 'verification_requests_token_key',
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "verification_requests" */
export type Verification_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "verification_requests" */
export type Verification_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verification_Requests>;
};

/** input type for inserting object relation for remote table "verification_requests" */
export type Verification_Requests_Obj_Rel_Insert_Input = {
  data: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "verification_requests" */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "verification_requests" */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

export type DataForPracticeToGradeEmptyQueryVariables = Exact<{
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
}>;

export type DataForPracticeToGradeEmptyQuery = { __typename?: 'query_root' } & {
  practice_to_course: Array<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      'id' | 'is_open' | 'open_date'
    > & {
        course: { __typename?: 'course' } & Pick<Course, 'id'> & {
            student_to_courses: Array<
              { __typename?: 'student_to_course' } & {
                student: { __typename?: 'student' } & Pick<Student, 'id'> & {
                    practice_to_students: Array<
                      { __typename?: 'practice_to_student' } & Pick<
                        Practice_To_Student,
                        'id' | 'student_id' | 'created_at'
                      > & {
                          practice_to_student_yields: Array<
                            { __typename?: 'practice_to_student_yield' } & Pick<
                              Practice_To_Student_Yield,
                              'id' | 'value' | 'practice_yield_id'
                            >
                          >;
                        }
                    >;
                  };
              }
            >;
          };
        practice: { __typename?: 'practice' } & {
          practice_yields: Array<
            { __typename?: 'practice_yield' } & Pick<Practice_Yield, 'id'>
          >;
        };
      }
  >;
};

export type UpdateFillEmptyHandoutsMutationVariables = Exact<{
  data: Array<Practice_To_Student_Insert_Input>;
}>;

export type UpdateFillEmptyHandoutsMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_student?: Maybe<
    { __typename?: 'practice_to_student_mutation_response' } & Pick<
      Practice_To_Student_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type GetGitInfoForStudentYieldQueryVariables = Exact<{
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
}>;

export type GetGitInfoForStudentYieldQuery = { __typename?: 'query_root' } & {
  studentYield?: Maybe<
    { __typename?: 'practice_to_student_yield' } & Pick<
      Practice_To_Student_Yield,
      'gitea_org_and_repo' | 'id' | 'practice_yield_id'
    >
  >;
  expectedOutput?: Maybe<
    { __typename?: 'practice_yield_expected_output' } & Pick<
      Practice_Yield_Expected_Output,
      'git_path' | 'method' | 'practice_yield_id'
    >
  >;
};

export type DataForUpdateToStudentLinkQueryVariables = Exact<{
  tokenId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;

export type DataForUpdateToStudentLinkQuery = { __typename?: 'query_root' } & {
  studentToSet: Array<
    { __typename?: 'student' } & Pick<Student, 'claim_token' | 'user_id' | 'id'>
  >;
  maybeStudentWithUser: Array<
    { __typename?: 'student' } & Pick<Student, 'claim_token' | 'user_id' | 'id'>
  >;
};

export type LinkStudentToUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;

export type LinkStudentToUserMutation = { __typename?: 'mutation_root' } & {
  update_student_by_pk?: Maybe<
    { __typename?: 'student' } & Pick<Student, 'id'>
  >;
};

export type FillEmptyForGradeMutationVariables = Exact<{
  courseId: Scalars['uuid'];
  practiceId: Scalars['uuid'];
}>;

export type FillEmptyForGradeMutation = { __typename?: 'mutation_root' } & {
  fillEmptyYields?: Maybe<
    { __typename?: 'FillEmptyYieldsOutput' } & Pick<
      FillEmptyYieldsOutput,
      'affected_rows'
    >
  >;
};

export type GetPracticeToGradeByCourseIdAndPracticeIdQueryVariables = Exact<{
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
}>;

export type GetPracticeToGradeByCourseIdAndPracticeIdQuery = {
  __typename?: 'query_root';
} & {
  practice_to_course: Array<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      'is_open' | 'open_date'
    > & { practiceToCourseId: Practice_To_Course['id'] }
  >;
};

export type InsertPracticeToStudentWithGradesMutationVariables = Exact<{
  objects: Array<Practice_To_Student_Insert_Input>;
}>;

export type InsertPracticeToStudentWithGradesMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_student?: Maybe<
    { __typename?: 'practice_to_student_mutation_response' } & Pick<
      Practice_To_Student_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type PracticeForGradingFragment = { __typename?: 'practice' } & {
  practice_yields: Array<
    { __typename?: 'practice_yield' } & Pick<Practice_Yield, 'id' | 'name'> & {
        practice_yield_expected_outputs: Array<
          { __typename?: 'practice_yield_expected_output' } & Pick<
            Practice_Yield_Expected_Output,
            'id'
          > & {
              practice_yield_grade_metrics: Array<
                { __typename?: 'practice_yield_grade_metric' } & Pick<
                  Practice_Yield_Grade_Metric,
                  'id' | 'name' | 'points'
                >
              >;
            }
        >;
      }
  >;
};

export type PracticeToStudentYieldForGradingFragment = {
  __typename?: 'practice_to_student_yield';
} & Pick<Practice_To_Student_Yield, 'id' | 'submited' | 'practice_yield_id'> & {
    practice_to_student_grade_metrics: Array<
      { __typename?: 'practice_to_student_grade_metric' } & Pick<
        Practice_To_Student_Grade_Metric,
        'id' | 'feedback' | 'percent_grade' | 'practice_yield_grade_metric_id'
      > & {
          practice_yield_grade_metric: {
            __typename?: 'practice_yield_grade_metric';
          } & Pick<Practice_Yield_Grade_Metric, 'name' | 'points'>;
        }
    >;
  };

export type PracticeToStudentForGradingFragment = {
  __typename?: 'practice_to_student';
} & Pick<
  Practice_To_Student,
  'id' | 'course_practice_id' | 'graded' | 'grade' | 'student_id'
> & {
    practice_to_student_yields: Array<
      {
        __typename?: 'practice_to_student_yield';
      } & PracticeToStudentYieldForGradingFragment
    >;
  };

export type DataForPracticeToGradeByPracticeToCoursePkQueryVariables = Exact<{
  practice_to_grade_id: Scalars['uuid'];
}>;

export type DataForPracticeToGradeByPracticeToCoursePkQuery = {
  __typename?: 'query_root';
} & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<Practice_To_Course, 'id'> & {
        practice: { __typename?: 'practice' } & PracticeForGradingFragment;
        practice_to_students: Array<
          {
            __typename?: 'practice_to_student';
          } & PracticeToStudentForGradingFragment
        >;
      }
  >;
};

export type GetStudentForMailSendQueryVariables = Exact<{
  studentIds?: Maybe<Array<Scalars['uuid']>>;
}>;

export type GetStudentForMailSendQuery = { __typename?: 'query_root' } & {
  student: Array<
    { __typename?: 'student' } & Pick<
      Student,
      'email' | 'claim_token' | 'full_name' | 'id'
    >
  >;
};

export type DataForSubmitHandoffQueryVariables = Exact<{
  practiceToPromoId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;

export type DataForSubmitHandoffQuery = { __typename?: 'query_root' } & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      'is_open'
    > & {
        practice: { __typename?: 'practice' } & Pick<Practice, 'id'> & {
            practice_yields: Array<
              { __typename?: 'practice_yield' } & Pick<
                Practice_Yield,
                'id' | 'name'
              >
            >;
          };
        practice_to_students: Array<
          { __typename?: 'practice_to_student' } & Pick<
            Practice_To_Student,
            'submited' | 'id'
          >
        >;
        course: { __typename?: 'course' } & {
          student_to_courses: Array<
            { __typename?: 'student_to_course' } & Pick<
              Student_To_Course,
              'student_id'
            >
          >;
        };
      }
  >;
};

export type MutationSubmitHandoffMutationVariables = Exact<{
  studentYields: Array<Practice_To_Student_Yield_Insert_Input>;
  student_id: Scalars['uuid'];
  promotion_practice_id: Scalars['uuid'];
}>;

export type MutationSubmitHandoffMutation = { __typename?: 'mutation_root' } & {
  insert_practice_to_student?: Maybe<
    { __typename?: 'practice_to_student_mutation_response' } & Pick<
      Practice_To_Student_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type SetSubmitedFalseOnEmptyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type SetSubmitedFalseOnEmptyMutation = {
  __typename?: 'mutation_root';
} & {
  update_practice_to_student_yield_by_pk?: Maybe<
    { __typename?: 'practice_to_student_yield' } & Pick<
      Practice_To_Student_Yield,
      'gitea_org_and_repo'
    >
  >;
};

export type UpdateGiteaOrgNameMutationVariables = Exact<{
  id: Scalars['uuid'];
  gitea_org_name: Scalars['String'];
}>;

export type UpdateGiteaOrgNameMutation = { __typename?: 'mutation_root' } & {
  update_practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<Practice_To_Course, 'id'>
  >;
};

export type GetPracticeToPromotionMetaQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeToPromotionMetaQuery = { __typename?: 'query_root' } & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & {
      practice: { __typename?: 'practice' } & Pick<Practice, 'title'>;
      course: { __typename?: 'course' } & Pick<Course, 'name' | 'years'>;
    }
  >;
};

export type OnStudentYieldCreatedDataQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type OnStudentYieldCreatedDataQuery = { __typename?: 'query_root' } & {
  practice_to_student_yield_by_pk?: Maybe<
    { __typename?: 'practice_to_student_yield' } & {
      practice_to_student: { __typename?: 'practice_to_student' } & {
        student: { __typename?: 'student' } & Pick<Student, 'full_name'>;
        practice_to_course: { __typename?: 'practice_to_course' } & Pick<
          Practice_To_Course,
          'gitea_org_name'
        >;
      };
      practice_yield: { __typename?: 'practice_yield' } & Pick<
        Practice_Yield,
        'id' | 'name' | 'method'
      >;
    }
  >;
};

export type OnStudentYieldMutationMutationVariables = Exact<{
  id: Scalars['uuid'];
  gitea_org_and_repo: Scalars['String'];
}>;

export type OnStudentYieldMutationMutation = {
  __typename?: 'mutation_root';
} & {
  update_practice_to_student_yield_by_pk?: Maybe<
    { __typename?: 'practice_to_student_yield' } & Pick<
      Practice_To_Student_Yield,
      'gitea_org_and_repo'
    >
  >;
};

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUserByEmailQuery = { __typename?: 'query_root' } & {
  user: Array<{ __typename?: 'user' } & UserForAuthFragment>;
};

export type CreateVerificationRequestMutationVariables = Exact<{
  config: Verification_Requests_Insert_Input;
}>;

export type CreateVerificationRequestMutation = {
  __typename?: 'mutation_root';
} & {
  insert_verification_requests_one?: Maybe<
    { __typename?: 'verification_requests' } & Pick<Verification_Requests, 'id'>
  >;
};

export type GetUserByProviderAccountIdQueryVariables = Exact<{
  providerId: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;

export type GetUserByProviderAccountIdQuery = { __typename?: 'query_root' } & {
  accounts: Array<
    { __typename?: 'accounts' } & {
      user: { __typename?: 'user' } & UserForAuthFragment;
    }
  >;
};

export type GetVerificationRequestByIdentifierAndTokenQueryVariables = Exact<{
  identifier: Scalars['String'];
  token: Scalars['String'];
}>;

export type GetVerificationRequestByIdentifierAndTokenQuery = {
  __typename?: 'query_root';
} & {
  verification_requests: Array<
    { __typename?: 'verification_requests' } & Pick<
      Verification_Requests,
      'expires' | 'created_at' | 'updated_at' | 'id' | 'identifier' | 'token'
    >
  >;
};

export type DeleteVerificationRequestByIdentifierAndTokenMutationVariables = Exact<{
  identifier: Scalars['String'];
  token: Scalars['String'];
}>;

export type DeleteVerificationRequestByIdentifierAndTokenMutation = {
  __typename?: 'mutation_root';
} & {
  delete_verification_requests?: Maybe<
    { __typename?: 'verification_requests_mutation_response' } & Pick<
      Verification_Requests_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetUserByIdQuery = { __typename?: 'query_root' } & {
  userByPk?: Maybe<{ __typename?: 'user' } & UserForAuthFragment>;
};

export type UserForAuthFragment = { __typename?: 'user' } & Pick<
  User,
  | 'id'
  | 'email'
  | 'email_verified'
  | 'image'
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'default_role'
> & {
    allowed_roles: Array<
      { __typename?: 'allowed_roles' } & Pick<Allowed_Roles, 'role'>
    >;
  };

export type CreateUserByEmailMutationVariables = Exact<{
  email: Scalars['String'];
  verified?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
}>;

export type CreateUserByEmailMutation = { __typename?: 'mutation_root' } & {
  insertUserOne?: Maybe<{ __typename?: 'user' } & UserForAuthFragment>;
};

export type LinkAccountMutationVariables = Exact<{
  object: Accounts_Insert_Input;
}>;

export type LinkAccountMutation = { __typename?: 'mutation_root' } & {
  insert_accounts_one?: Maybe<
    { __typename?: 'accounts' } & Pick<Accounts, 'id'>
  >;
};

export type SetTimeEmailVerifiedMutationVariables = Exact<{
  userId: Scalars['uuid'];
  time?: Maybe<Scalars['timestamptz']>;
}>;

export type SetTimeEmailVerifiedMutation = { __typename?: 'mutation_root' } & {
  updateUserByPk?: Maybe<{ __typename?: 'user' } & UserForAuthFragment>;
};

export type DeleteUserByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteUserByIdMutation = { __typename?: 'mutation_root' } & {
  deleteUserByPk?: Maybe<{ __typename?: 'user' } & Pick<User, 'id'>>;
};

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type FindUserByEmailQuery = { __typename?: 'query_root' } & {
  maybeUser: Array<{ __typename?: 'user' } & Pick<User, 'id'>>;
};

export const PracticeForGradingFragmentDoc = gql`
  fragment PracticeForGrading on practice {
    practice_yields {
      id
      name
      practice_yield_expected_outputs {
        id
        practice_yield_grade_metrics {
          id
          name
          points
        }
      }
    }
  }
`;
export const PracticeToStudentYieldForGradingFragmentDoc = gql`
  fragment PracticeToStudentYieldForGrading on practice_to_student_yield {
    id
    submited
    practice_yield_id
    practice_to_student_grade_metrics {
      id
      feedback
      percent_grade
      practice_yield_grade_metric_id
      practice_yield_grade_metric {
        name
        points
      }
    }
  }
`;
export const PracticeToStudentForGradingFragmentDoc = gql`
  fragment PracticeToStudentForGrading on practice_to_student {
    id
    course_practice_id
    graded
    grade
    student_id
    practice_to_student_yields {
      ...PracticeToStudentYieldForGrading
    }
  }
  ${PracticeToStudentYieldForGradingFragmentDoc}
`;
export const UserForAuthFragmentDoc = gql`
  fragment UserForAuth on user {
    id
    email
    email_verified
    image
    createdAt
    updatedAt
    name
    default_role
    allowed_roles {
      role
    }
  }
`;
export const DataForPracticeToGradeEmptyDocument = gql`
  query dataForPracticeToGradeEmpty($course_id: uuid!, $practice_id: uuid!) {
    practice_to_course(
      where: {
        course_id: { _eq: $course_id }
        practice_id: { _eq: $practice_id }
      }
    ) {
      id
      is_open
      open_date
      course {
        id
        student_to_courses {
          student {
            id
            practice_to_students(
              where: {
                practice_to_course: {
                  course_id: { _eq: $course_id }
                  practice_id: { _eq: $practice_id }
                }
              }
            ) {
              id
              student_id
              created_at
              practice_to_student_yields {
                id
                value
                practice_yield_id
              }
            }
          }
        }
      }
      practice {
        practice_yields {
          id
        }
      }
    }
  }
`;
export const UpdateFillEmptyHandoutsDocument = gql`
  mutation updateFillEmptyHandouts(
    $data: [practice_to_student_insert_input!]!
  ) {
    insert_practice_to_student(
      on_conflict: {
        constraint: practice_to_student_student_id_promotion_practice_id_key
        update_columns: course_practice_id
      }
      objects: $data
    ) {
      affected_rows
    }
  }
`;
export const GetGitInfoForStudentYieldDocument = gql`
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
export const DataForUpdateToStudentLinkDocument = gql`
  query dataForUpdateToStudentLink($tokenId: uuid!, $userId: uuid!) {
    studentToSet: student(where: { claim_token: { _eq: $tokenId } }) {
      claim_token
      user_id
      id
    }
    maybeStudentWithUser: student(where: { user_id: { _eq: $userId } }) {
      claim_token
      user_id
      id
    }
  }
`;
export const LinkStudentToUserDocument = gql`
  mutation linkStudentToUser($id: uuid!, $user_id: uuid!) {
    update_student_by_pk(
      pk_columns: { id: $id }
      _set: { user_id: $user_id, claim_token: null }
    ) {
      id
    }
  }
`;
export const FillEmptyForGradeDocument = gql`
  mutation fillEmptyForGrade($courseId: uuid!, $practiceId: uuid!) {
    fillEmptyYields(course_id: $courseId, practice_id: $practiceId) {
      affected_rows
    }
  }
`;
export const GetPracticeToGradeByCourseIdAndPracticeIdDocument = gql`
  query getPracticeToGradeByCourseIdAndPracticeId(
    $course_id: uuid!
    $practice_id: uuid!
  ) {
    practice_to_course(
      where: {
        course_id: { _eq: $course_id }
        practice_id: { _eq: $practice_id }
      }
    ) {
      practiceToCourseId: id
      is_open
      open_date
    }
  }
`;
export const InsertPracticeToStudentWithGradesDocument = gql`
  mutation insertPracticeToStudentWithGrades(
    $objects: [practice_to_student_insert_input!]!
  ) {
    insert_practice_to_student(
      objects: $objects
      on_conflict: {
        constraint: practice_to_student_pkey
        update_columns: [grade, grade_detail, graded, feedback]
      }
    ) {
      affected_rows
    }
  }
`;
export const DataForPracticeToGradeByPracticeToCoursePkDocument = gql`
  query dataForPracticeToGradeByPracticeToCoursePk(
    $practice_to_grade_id: uuid!
  ) {
    practice_to_course_by_pk(id: $practice_to_grade_id) {
      id
      practice {
        ...PracticeForGrading
      }
      practice_to_students {
        ...PracticeToStudentForGrading
      }
    }
  }
  ${PracticeForGradingFragmentDoc}
  ${PracticeToStudentForGradingFragmentDoc}
`;
export const GetStudentForMailSendDocument = gql`
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
export const DataForSubmitHandoffDocument = gql`
  query dataForSubmitHandoff($practiceToPromoId: uuid!, $userId: uuid!) {
    practice_to_course_by_pk(id: $practiceToPromoId) {
      is_open
      practice {
        practice_yields {
          id
          name
        }
        id
      }
      practice_to_students(where: { student: { user_id: { _eq: $userId } } }) {
        submited
        id
      }
      course {
        student_to_courses(where: { student: { user_id: { _eq: $userId } } }) {
          student_id
        }
      }
    }
  }
`;
export const MutationSubmitHandoffDocument = gql`
  mutation mutationSubmitHandoff(
    $studentYields: [practice_to_student_yield_insert_input!]!
    $student_id: uuid!
    $promotion_practice_id: uuid!
  ) {
    insert_practice_to_student(
      objects: {
        submited: true
        practice_to_student_yields: { data: $studentYields }
        student_id: $student_id
        course_practice_id: $promotion_practice_id
      }
    ) {
      affected_rows
    }
  }
`;
export const SetSubmitedFalseOnEmptyDocument = gql`
  mutation setSubmitedFalseOnEmpty($id: uuid!) {
    update_practice_to_student_yield_by_pk(
      pk_columns: { id: $id }
      _set: { submited: false }
    ) {
      gitea_org_and_repo
    }
  }
`;
export const UpdateGiteaOrgNameDocument = gql`
  mutation updateGiteaOrgName($id: uuid!, $gitea_org_name: String!) {
    update_practice_to_course_by_pk(
      pk_columns: { id: $id }
      _set: { gitea_org_name: $gitea_org_name }
    ) {
      id
    }
  }
`;
export const GetPracticeToPromotionMetaDocument = gql`
  query getPracticeToPromotionMeta($id: uuid!) {
    practice_to_course_by_pk(id: $id) {
      practice {
        title
      }
      course {
        name
        years
      }
    }
  }
`;
export const OnStudentYieldCreatedDataDocument = gql`
  query onStudentYieldCreatedData($id: uuid!) {
    practice_to_student_yield_by_pk(id: $id) {
      practice_to_student {
        student {
          full_name
        }
        practice_to_course {
          gitea_org_name
        }
      }
      practice_yield {
        id
        name
        method
      }
    }
  }
`;
export const OnStudentYieldMutationDocument = gql`
  mutation onStudentYieldMutation($id: uuid!, $gitea_org_and_repo: String!) {
    update_practice_to_student_yield_by_pk(
      pk_columns: { id: $id }
      _set: { gitea_org_and_repo: $gitea_org_and_repo }
    ) {
      gitea_org_and_repo
    }
  }
`;
export const GetUserByEmailDocument = gql`
  query getUserByEmail($email: String!) {
    user(where: { email: { _eq: $email } }) {
      ...UserForAuth
    }
  }
  ${UserForAuthFragmentDoc}
`;
export const CreateVerificationRequestDocument = gql`
  mutation createVerificationRequest(
    $config: verification_requests_insert_input!
  ) {
    insert_verification_requests_one(
      object: $config
      on_conflict: {
        constraint: verification_requests_pkey
        update_columns: []
      }
    ) {
      id
    }
  }
`;
export const GetUserByProviderAccountIdDocument = gql`
  query getUserByProviderAccountId(
    $providerId: String!
    $providerAccountId: String!
  ) {
    accounts(
      where: {
        provider_id: { _eq: $providerId }
        _and: { provider_account_id: { _eq: $providerAccountId } }
      }
    ) {
      user {
        ...UserForAuth
      }
    }
  }
  ${UserForAuthFragmentDoc}
`;
export const GetVerificationRequestByIdentifierAndTokenDocument = gql`
  query getVerificationRequestByIdentifierAndToken(
    $identifier: String!
    $token: String!
  ) {
    verification_requests(
      limit: 1
      where: {
        identifier: { _eq: $identifier }
        _and: { token: { _eq: $token } }
      }
    ) {
      expires
      created_at
      updated_at
      id
      identifier
      token
    }
  }
`;
export const DeleteVerificationRequestByIdentifierAndTokenDocument = gql`
  mutation deleteVerificationRequestByIdentifierAndToken(
    $identifier: String!
    $token: String!
  ) {
    delete_verification_requests(
      where: {
        identifier: { _eq: $identifier }
        _and: { token: { _eq: $token } }
      }
    ) {
      affected_rows
    }
  }
`;
export const GetUserByIdDocument = gql`
  query getUserById($id: uuid!) {
    userByPk(id: $id) {
      ...UserForAuth
    }
  }
  ${UserForAuthFragmentDoc}
`;
export const CreateUserByEmailDocument = gql`
  mutation createUserByEmail(
    $email: String!
    $verified: timestamptz
    $name: String
    $image: String
  ) {
    insertUserOne(
      on_conflict: {
        constraint: user_email_key
        update_columns: [email_verified]
      }
      object: {
        email_verified: $verified
        email: $email
        name: $name
        image: $image
        default_role: student
        allowed_roles: {
          data: [{ role: student }]
          on_conflict: { update_columns: [], constraint: allowed_roles_pkey }
        }
      }
    ) {
      ...UserForAuth
    }
  }
  ${UserForAuthFragmentDoc}
`;
export const LinkAccountDocument = gql`
  mutation linkAccount($object: accounts_insert_input!) {
    insert_accounts_one(
      object: $object
      on_conflict: { constraint: accounts_compound_id_key, update_columns: [] }
    ) {
      id
    }
  }
`;
export const SetTimeEmailVerifiedDocument = gql`
  mutation setTimeEmailVerified($userId: uuid!, $time: timestamptz) {
    updateUserByPk(
      pk_columns: { id: $userId }
      _set: { email_verified: $time }
    ) {
      ...UserForAuth
    }
  }
  ${UserForAuthFragmentDoc}
`;
export const DeleteUserByIdDocument = gql`
  mutation deleteUserById($id: uuid!) {
    deleteUserByPk(id: $id) {
      id
    }
  }
`;
export const FindUserByEmailDocument = gql`
  query findUserByEmail($email: String!) {
    maybeUser: user(where: { email: { _eq: $email } }) {
      id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    dataForPracticeToGradeEmpty(
      variables: DataForPracticeToGradeEmptyQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DataForPracticeToGradeEmptyQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DataForPracticeToGradeEmptyQuery>(
            DataForPracticeToGradeEmptyDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'dataForPracticeToGradeEmpty',
      );
    },
    updateFillEmptyHandouts(
      variables: UpdateFillEmptyHandoutsMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateFillEmptyHandoutsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateFillEmptyHandoutsMutation>(
            UpdateFillEmptyHandoutsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateFillEmptyHandouts',
      );
    },
    getGitInfoForStudentYield(
      variables: GetGitInfoForStudentYieldQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetGitInfoForStudentYieldQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetGitInfoForStudentYieldQuery>(
            GetGitInfoForStudentYieldDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getGitInfoForStudentYield',
      );
    },
    dataForUpdateToStudentLink(
      variables: DataForUpdateToStudentLinkQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DataForUpdateToStudentLinkQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DataForUpdateToStudentLinkQuery>(
            DataForUpdateToStudentLinkDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'dataForUpdateToStudentLink',
      );
    },
    linkStudentToUser(
      variables: LinkStudentToUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<LinkStudentToUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LinkStudentToUserMutation>(
            LinkStudentToUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'linkStudentToUser',
      );
    },
    fillEmptyForGrade(
      variables: FillEmptyForGradeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FillEmptyForGradeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FillEmptyForGradeMutation>(
            FillEmptyForGradeDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'fillEmptyForGrade',
      );
    },
    getPracticeToGradeByCourseIdAndPracticeId(
      variables: GetPracticeToGradeByCourseIdAndPracticeIdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetPracticeToGradeByCourseIdAndPracticeIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPracticeToGradeByCourseIdAndPracticeIdQuery>(
            GetPracticeToGradeByCourseIdAndPracticeIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getPracticeToGradeByCourseIdAndPracticeId',
      );
    },
    insertPracticeToStudentWithGrades(
      variables: InsertPracticeToStudentWithGradesMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<InsertPracticeToStudentWithGradesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertPracticeToStudentWithGradesMutation>(
            InsertPracticeToStudentWithGradesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'insertPracticeToStudentWithGrades',
      );
    },
    dataForPracticeToGradeByPracticeToCoursePk(
      variables: DataForPracticeToGradeByPracticeToCoursePkQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DataForPracticeToGradeByPracticeToCoursePkQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DataForPracticeToGradeByPracticeToCoursePkQuery>(
            DataForPracticeToGradeByPracticeToCoursePkDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'dataForPracticeToGradeByPracticeToCoursePk',
      );
    },
    getStudentForMailSend(
      variables?: GetStudentForMailSendQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetStudentForMailSendQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetStudentForMailSendQuery>(
            GetStudentForMailSendDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getStudentForMailSend',
      );
    },
    dataForSubmitHandoff(
      variables: DataForSubmitHandoffQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DataForSubmitHandoffQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DataForSubmitHandoffQuery>(
            DataForSubmitHandoffDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'dataForSubmitHandoff',
      );
    },
    mutationSubmitHandoff(
      variables: MutationSubmitHandoffMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<MutationSubmitHandoffMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MutationSubmitHandoffMutation>(
            MutationSubmitHandoffDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'mutationSubmitHandoff',
      );
    },
    setSubmitedFalseOnEmpty(
      variables: SetSubmitedFalseOnEmptyMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SetSubmitedFalseOnEmptyMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SetSubmitedFalseOnEmptyMutation>(
            SetSubmitedFalseOnEmptyDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'setSubmitedFalseOnEmpty',
      );
    },
    updateGiteaOrgName(
      variables: UpdateGiteaOrgNameMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateGiteaOrgNameMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateGiteaOrgNameMutation>(
            UpdateGiteaOrgNameDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateGiteaOrgName',
      );
    },
    getPracticeToPromotionMeta(
      variables: GetPracticeToPromotionMetaQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetPracticeToPromotionMetaQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPracticeToPromotionMetaQuery>(
            GetPracticeToPromotionMetaDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getPracticeToPromotionMeta',
      );
    },
    onStudentYieldCreatedData(
      variables: OnStudentYieldCreatedDataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<OnStudentYieldCreatedDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OnStudentYieldCreatedDataQuery>(
            OnStudentYieldCreatedDataDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'onStudentYieldCreatedData',
      );
    },
    onStudentYieldMutation(
      variables: OnStudentYieldMutationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<OnStudentYieldMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OnStudentYieldMutationMutation>(
            OnStudentYieldMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'onStudentYieldMutation',
      );
    },
    getUserByEmail(
      variables: GetUserByEmailQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserByEmailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserByEmailQuery>(
            GetUserByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserByEmail',
      );
    },
    createVerificationRequest(
      variables: CreateVerificationRequestMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateVerificationRequestMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateVerificationRequestMutation>(
            CreateVerificationRequestDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createVerificationRequest',
      );
    },
    getUserByProviderAccountId(
      variables: GetUserByProviderAccountIdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserByProviderAccountIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserByProviderAccountIdQuery>(
            GetUserByProviderAccountIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserByProviderAccountId',
      );
    },
    getVerificationRequestByIdentifierAndToken(
      variables: GetVerificationRequestByIdentifierAndTokenQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetVerificationRequestByIdentifierAndTokenQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetVerificationRequestByIdentifierAndTokenQuery>(
            GetVerificationRequestByIdentifierAndTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getVerificationRequestByIdentifierAndToken',
      );
    },
    deleteVerificationRequestByIdentifierAndToken(
      variables: DeleteVerificationRequestByIdentifierAndTokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteVerificationRequestByIdentifierAndTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteVerificationRequestByIdentifierAndTokenMutation>(
            DeleteVerificationRequestByIdentifierAndTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteVerificationRequestByIdentifierAndToken',
      );
    },
    getUserById(
      variables: GetUserByIdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserByIdQuery>(GetUserByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getUserById',
      );
    },
    createUserByEmail(
      variables: CreateUserByEmailMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateUserByEmailMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserByEmailMutation>(
            CreateUserByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createUserByEmail',
      );
    },
    linkAccount(
      variables: LinkAccountMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<LinkAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LinkAccountMutation>(LinkAccountDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'linkAccount',
      );
    },
    setTimeEmailVerified(
      variables: SetTimeEmailVerifiedMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SetTimeEmailVerifiedMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SetTimeEmailVerifiedMutation>(
            SetTimeEmailVerifiedDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'setTimeEmailVerified',
      );
    },
    deleteUserById(
      variables: DeleteUserByIdMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteUserByIdMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUserByIdMutation>(
            DeleteUserByIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUserById',
      );
    },
    findUserByEmail(
      variables: FindUserByEmailQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FindUserByEmailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindUserByEmailQuery>(
            FindUserByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'findUserByEmail',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;

import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
} from '@apollo/client/cache';
export type InsertStudentAnswerOutputKeySpecifier = (
  | 'id'
  | 'student_output'
  | InsertStudentAnswerOutputKeySpecifier
)[];
export type InsertStudentAnswerOutputFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  student_output?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SendStudentClaimMailOutputKeySpecifier = (
  | 'nmbMailSent'
  | SendStudentClaimMailOutputKeySpecifier
)[];
export type SendStudentClaimMailOutputFieldPolicy = {
  nmbMailSent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubmitHandoffOutputKeySpecifier = (
  | 'status'
  | SubmitHandoffOutputKeySpecifier
)[];
export type SubmitHandoffOutputFieldPolicy = {
  status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type linkStudentToUserOutputKeySpecifier = (
  | 'ok'
  | linkStudentToUserOutputKeySpecifier
)[];
export type linkStudentToUserOutputFieldPolicy = {
  ok?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type mutation_rootKeySpecifier = (
  | 'deleteUser'
  | 'deleteUserByPk'
  | 'delete_practice'
  | 'delete_practice_by_pk'
  | 'delete_practice_grade_metric'
  | 'delete_practice_grade_metric_by_pk'
  | 'delete_practice_grade_metric_type'
  | 'delete_practice_grade_metric_type_by_pk'
  | 'delete_practice_to_promotion'
  | 'delete_practice_to_promotion_by_pk'
  | 'delete_practice_to_student'
  | 'delete_practice_to_student_by_pk'
  | 'delete_practice_to_student_grade_metric'
  | 'delete_practice_to_student_grade_metric_by_pk'
  | 'delete_practice_to_student_yield'
  | 'delete_practice_to_student_yield_by_pk'
  | 'delete_practice_yield'
  | 'delete_practice_yield_by_pk'
  | 'delete_practice_yield_type'
  | 'delete_practice_yield_type_by_pk'
  | 'delete_promotion'
  | 'delete_promotion_by_pk'
  | 'delete_student'
  | 'delete_student_by_pk'
  | 'delete_student_to_promotion'
  | 'delete_student_to_promotion_by_pk'
  | 'insertUser'
  | 'insertUserOne'
  | 'insert_practice'
  | 'insert_practice_grade_metric'
  | 'insert_practice_grade_metric_one'
  | 'insert_practice_grade_metric_type'
  | 'insert_practice_grade_metric_type_one'
  | 'insert_practice_one'
  | 'insert_practice_to_promotion'
  | 'insert_practice_to_promotion_one'
  | 'insert_practice_to_student'
  | 'insert_practice_to_student_grade_metric'
  | 'insert_practice_to_student_grade_metric_one'
  | 'insert_practice_to_student_one'
  | 'insert_practice_to_student_yield'
  | 'insert_practice_to_student_yield_one'
  | 'insert_practice_yield'
  | 'insert_practice_yield_one'
  | 'insert_practice_yield_type'
  | 'insert_practice_yield_type_one'
  | 'insert_promotion'
  | 'insert_promotion_one'
  | 'insert_student'
  | 'insert_student_one'
  | 'insert_student_to_promotion'
  | 'insert_student_to_promotion_one'
  | 'linkStudentToUser'
  | 'sendStudentClaimMail'
  | 'submitHandoff'
  | 'updateUser'
  | 'updateUserByPk'
  | 'update_practice'
  | 'update_practice_by_pk'
  | 'update_practice_grade_metric'
  | 'update_practice_grade_metric_by_pk'
  | 'update_practice_grade_metric_type'
  | 'update_practice_grade_metric_type_by_pk'
  | 'update_practice_to_promotion'
  | 'update_practice_to_promotion_by_pk'
  | 'update_practice_to_student'
  | 'update_practice_to_student_by_pk'
  | 'update_practice_to_student_grade_metric'
  | 'update_practice_to_student_grade_metric_by_pk'
  | 'update_practice_to_student_yield'
  | 'update_practice_to_student_yield_by_pk'
  | 'update_practice_yield'
  | 'update_practice_yield_by_pk'
  | 'update_practice_yield_type'
  | 'update_practice_yield_type_by_pk'
  | 'update_promotion'
  | 'update_promotion_by_pk'
  | 'update_student'
  | 'update_student_by_pk'
  | 'update_student_to_promotion'
  | 'update_student_to_promotion_by_pk'
  | mutation_rootKeySpecifier
)[];
export type mutation_rootFieldPolicy = {
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUserByPk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_grade_metric_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  delete_practice_grade_metric_type?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_grade_metric_type_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  delete_practice_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_to_promotion_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  delete_practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_to_student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_to_student_grade_metric?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  delete_practice_to_student_grade_metric_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  delete_practice_to_student_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_to_student_yield_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  delete_practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_yield_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_yield_type?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_practice_yield_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_student?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_student_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  delete_student_to_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  insertUser?: FieldPolicy<any> | FieldReadFunction<any>;
  insertUserOne?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_grade_metric_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_grade_metric_type?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_grade_metric_type_one?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  insert_practice_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_to_promotion_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_to_student_grade_metric?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  insert_practice_to_student_grade_metric_one?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  insert_practice_to_student_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_to_student_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_to_student_yield_one?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  insert_practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_yield_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_yield_type?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_practice_yield_type_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_promotion_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_student?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_student_one?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_student_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  insert_student_to_promotion_one?: FieldPolicy<any> | FieldReadFunction<any>;
  linkStudentToUser?: FieldPolicy<any> | FieldReadFunction<any>;
  sendStudentClaimMail?: FieldPolicy<any> | FieldReadFunction<any>;
  submitHandoff?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUserByPk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_grade_metric_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  update_practice_grade_metric_type?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_grade_metric_type_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  update_practice_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_to_promotion_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  update_practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_to_student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_to_student_grade_metric?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  update_practice_to_student_grade_metric_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  update_practice_to_student_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_to_student_yield_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  update_practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_yield_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_yield_type?: FieldPolicy<any> | FieldReadFunction<any>;
  update_practice_yield_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  update_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_student?: FieldPolicy<any> | FieldReadFunction<any>;
  update_student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  update_student_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  update_student_to_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practiceKeySpecifier = (
  | 'created_at'
  | 'description'
  | 'id'
  | 'practice_grade_metrics'
  | 'practice_grade_metrics_aggregate'
  | 'practice_to_promotions'
  | 'practice_to_promotions_aggregate'
  | 'practice_yields'
  | 'practice_yields_aggregate'
  | 'title'
  | 'updated_at'
  | practiceKeySpecifier
)[];
export type practiceFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metrics?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metrics_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotions?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yields?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yields_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_aggregateKeySpecifier
)[];
export type practice_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | practice_aggregate_fieldsKeySpecifier
)[];
export type practice_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metricKeySpecifier = (
  | 'created_at'
  | 'feedbacks'
  | 'id'
  | 'meta'
  | 'method'
  | 'name'
  | 'points'
  | 'practice'
  | 'practice_grade_metric_type'
  | 'practice_id'
  | 'practice_to_student_grade_metrics'
  | 'practice_to_student_grade_metrics_aggregate'
  | 'practice_yield'
  | 'updated_at'
  | 'yield_id'
  | practice_grade_metricKeySpecifier
)[];
export type practice_grade_metricFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  feedbacks?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
  method?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  points?: FieldPolicy<any> | FieldReadFunction<any>;
  practice?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_type?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metrics?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metrics_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  yield_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_grade_metric_aggregateKeySpecifier
)[];
export type practice_grade_metric_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_aggregate_fieldsKeySpecifier = (
  | 'avg'
  | 'count'
  | 'max'
  | 'min'
  | 'stddev'
  | 'stddev_pop'
  | 'stddev_samp'
  | 'sum'
  | 'var_pop'
  | 'var_samp'
  | 'variance'
  | practice_grade_metric_aggregate_fieldsKeySpecifier
)[];
export type practice_grade_metric_aggregate_fieldsFieldPolicy = {
  avg?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>;
  sum?: FieldPolicy<any> | FieldReadFunction<any>;
  var_pop?: FieldPolicy<any> | FieldReadFunction<any>;
  var_samp?: FieldPolicy<any> | FieldReadFunction<any>;
  variance?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_avg_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_avg_fieldsKeySpecifier
)[];
export type practice_grade_metric_avg_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'name'
  | 'points'
  | 'practice_id'
  | 'updated_at'
  | 'yield_id'
  | practice_grade_metric_max_fieldsKeySpecifier
)[];
export type practice_grade_metric_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  points?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  yield_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'name'
  | 'points'
  | 'practice_id'
  | 'updated_at'
  | 'yield_id'
  | practice_grade_metric_min_fieldsKeySpecifier
)[];
export type practice_grade_metric_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  points?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  yield_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_grade_metric_mutation_responseKeySpecifier
)[];
export type practice_grade_metric_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_stddev_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_stddev_fieldsKeySpecifier
)[];
export type practice_grade_metric_stddev_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_stddev_pop_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_stddev_pop_fieldsKeySpecifier
)[];
export type practice_grade_metric_stddev_pop_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_stddev_samp_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_stddev_samp_fieldsKeySpecifier
)[];
export type practice_grade_metric_stddev_samp_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_sum_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_sum_fieldsKeySpecifier
)[];
export type practice_grade_metric_sum_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_typeKeySpecifier = (
  | 'name'
  | 'practice_grade_metrics'
  | 'practice_grade_metrics_aggregate'
  | practice_grade_metric_typeKeySpecifier
)[];
export type practice_grade_metric_typeFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metrics?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metrics_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_type_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_grade_metric_type_aggregateKeySpecifier
)[];
export type practice_grade_metric_type_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_type_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | practice_grade_metric_type_aggregate_fieldsKeySpecifier
)[];
export type practice_grade_metric_type_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_type_max_fieldsKeySpecifier = (
  | 'name'
  | practice_grade_metric_type_max_fieldsKeySpecifier
)[];
export type practice_grade_metric_type_max_fieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_type_min_fieldsKeySpecifier = (
  | 'name'
  | practice_grade_metric_type_min_fieldsKeySpecifier
)[];
export type practice_grade_metric_type_min_fieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_type_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_grade_metric_type_mutation_responseKeySpecifier
)[];
export type practice_grade_metric_type_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_var_pop_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_var_pop_fieldsKeySpecifier
)[];
export type practice_grade_metric_var_pop_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_var_samp_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_var_samp_fieldsKeySpecifier
)[];
export type practice_grade_metric_var_samp_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_grade_metric_variance_fieldsKeySpecifier = (
  | 'points'
  | practice_grade_metric_variance_fieldsKeySpecifier
)[];
export type practice_grade_metric_variance_fieldsFieldPolicy = {
  points?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'description'
  | 'id'
  | 'title'
  | 'updated_at'
  | practice_max_fieldsKeySpecifier
)[];
export type practice_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'description'
  | 'id'
  | 'title'
  | 'updated_at'
  | practice_min_fieldsKeySpecifier
)[];
export type practice_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_mutation_responseKeySpecifier
)[];
export type practice_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_promotionKeySpecifier = (
  | 'can_student_see_feedback'
  | 'can_student_see_grade'
  | 'close_date'
  | 'created_at'
  | 'gitea_org_name'
  | 'id'
  | 'is_open'
  | 'open_date'
  | 'practice'
  | 'practice_id'
  | 'practice_to_students'
  | 'practice_to_students_aggregate'
  | 'promotion'
  | 'promotion_id'
  | 'updated_at'
  | practice_to_promotionKeySpecifier
)[];
export type practice_to_promotionFieldPolicy = {
  can_student_see_feedback?: FieldPolicy<any> | FieldReadFunction<any>;
  can_student_see_grade?: FieldPolicy<any> | FieldReadFunction<any>;
  close_date?: FieldPolicy<any> | FieldReadFunction<any>;
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  gitea_org_name?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  is_open?: FieldPolicy<any> | FieldReadFunction<any>;
  open_date?: FieldPolicy<any> | FieldReadFunction<any>;
  practice?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_students?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_students_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_promotion_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_to_promotion_aggregateKeySpecifier
)[];
export type practice_to_promotion_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_promotion_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | practice_to_promotion_aggregate_fieldsKeySpecifier
)[];
export type practice_to_promotion_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_promotion_max_fieldsKeySpecifier = (
  | 'close_date'
  | 'created_at'
  | 'gitea_org_name'
  | 'id'
  | 'open_date'
  | 'practice_id'
  | 'promotion_id'
  | 'updated_at'
  | practice_to_promotion_max_fieldsKeySpecifier
)[];
export type practice_to_promotion_max_fieldsFieldPolicy = {
  close_date?: FieldPolicy<any> | FieldReadFunction<any>;
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  gitea_org_name?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  open_date?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_promotion_min_fieldsKeySpecifier = (
  | 'close_date'
  | 'created_at'
  | 'gitea_org_name'
  | 'id'
  | 'open_date'
  | 'practice_id'
  | 'promotion_id'
  | 'updated_at'
  | practice_to_promotion_min_fieldsKeySpecifier
)[];
export type practice_to_promotion_min_fieldsFieldPolicy = {
  close_date?: FieldPolicy<any> | FieldReadFunction<any>;
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  gitea_org_name?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  open_date?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_promotion_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_to_promotion_mutation_responseKeySpecifier
)[];
export type practice_to_promotion_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_studentKeySpecifier = (
  | 'created_at'
  | 'feedback'
  | 'grade'
  | 'graded'
  | 'id'
  | 'practice_to_promotion'
  | 'practice_to_student_grade_metrics'
  | 'practice_to_student_grade_metrics_aggregate'
  | 'practice_to_student_yields'
  | 'practice_to_student_yields_aggregate'
  | 'promotion_practice_id'
  | 'student'
  | 'student_id'
  | 'submited'
  | 'updated_at'
  | practice_to_studentKeySpecifier
)[];
export type practice_to_studentFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  feedback?: FieldPolicy<any> | FieldReadFunction<any>;
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
  graded?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metrics?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metrics_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_yields?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_yields_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  promotion_practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  student?: FieldPolicy<any> | FieldReadFunction<any>;
  student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  submited?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_to_student_aggregateKeySpecifier
)[];
export type practice_to_student_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_aggregate_fieldsKeySpecifier = (
  | 'avg'
  | 'count'
  | 'max'
  | 'min'
  | 'stddev'
  | 'stddev_pop'
  | 'stddev_samp'
  | 'sum'
  | 'var_pop'
  | 'var_samp'
  | 'variance'
  | practice_to_student_aggregate_fieldsKeySpecifier
)[];
export type practice_to_student_aggregate_fieldsFieldPolicy = {
  avg?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>;
  sum?: FieldPolicy<any> | FieldReadFunction<any>;
  var_pop?: FieldPolicy<any> | FieldReadFunction<any>;
  var_samp?: FieldPolicy<any> | FieldReadFunction<any>;
  variance?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_avg_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_avg_fieldsKeySpecifier
)[];
export type practice_to_student_avg_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metricKeySpecifier = (
  | 'created_at'
  | 'feedback'
  | 'id'
  | 'percent_grade'
  | 'practice_grade_metric'
  | 'practice_grade_metric_id'
  | 'practice_to_student'
  | 'practice_to_student_id'
  | 'updated_at'
  | practice_to_student_grade_metricKeySpecifier
)[];
export type practice_to_student_grade_metricFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  feedback?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_to_student_grade_metric_aggregateKeySpecifier
)[];
export type practice_to_student_grade_metric_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_aggregate_fieldsKeySpecifier = (
  | 'avg'
  | 'count'
  | 'max'
  | 'min'
  | 'stddev'
  | 'stddev_pop'
  | 'stddev_samp'
  | 'sum'
  | 'var_pop'
  | 'var_samp'
  | 'variance'
  | practice_to_student_grade_metric_aggregate_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_aggregate_fieldsFieldPolicy = {
  avg?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>;
  stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>;
  sum?: FieldPolicy<any> | FieldReadFunction<any>;
  var_pop?: FieldPolicy<any> | FieldReadFunction<any>;
  var_samp?: FieldPolicy<any> | FieldReadFunction<any>;
  variance?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_avg_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_avg_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_avg_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'percent_grade'
  | 'practice_grade_metric_id'
  | 'practice_to_student_id'
  | 'updated_at'
  | practice_to_student_grade_metric_max_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'percent_grade'
  | 'practice_grade_metric_id'
  | 'practice_to_student_id'
  | 'updated_at'
  | practice_to_student_grade_metric_min_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_to_student_grade_metric_mutation_responseKeySpecifier
)[];
export type practice_to_student_grade_metric_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_stddev_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_stddev_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_stddev_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_stddev_pop_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_stddev_pop_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_stddev_pop_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_stddev_samp_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_stddev_samp_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_stddev_samp_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_sum_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_sum_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_sum_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_var_pop_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_var_pop_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_var_pop_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_var_samp_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_var_samp_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_var_samp_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_grade_metric_variance_fieldsKeySpecifier = (
  | 'percent_grade'
  | practice_to_student_grade_metric_variance_fieldsKeySpecifier
)[];
export type practice_to_student_grade_metric_variance_fieldsFieldPolicy = {
  percent_grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'feedback'
  | 'grade'
  | 'id'
  | 'promotion_practice_id'
  | 'student_id'
  | 'updated_at'
  | practice_to_student_max_fieldsKeySpecifier
)[];
export type practice_to_student_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  feedback?: FieldPolicy<any> | FieldReadFunction<any>;
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'feedback'
  | 'grade'
  | 'id'
  | 'promotion_practice_id'
  | 'student_id'
  | 'updated_at'
  | practice_to_student_min_fieldsKeySpecifier
)[];
export type practice_to_student_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  feedback?: FieldPolicy<any> | FieldReadFunction<any>;
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_to_student_mutation_responseKeySpecifier
)[];
export type practice_to_student_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_stddev_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_stddev_fieldsKeySpecifier
)[];
export type practice_to_student_stddev_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_stddev_pop_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_stddev_pop_fieldsKeySpecifier
)[];
export type practice_to_student_stddev_pop_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_stddev_samp_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_stddev_samp_fieldsKeySpecifier
)[];
export type practice_to_student_stddev_samp_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_sum_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_sum_fieldsKeySpecifier
)[];
export type practice_to_student_sum_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_var_pop_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_var_pop_fieldsKeySpecifier
)[];
export type practice_to_student_var_pop_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_var_samp_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_var_samp_fieldsKeySpecifier
)[];
export type practice_to_student_var_samp_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_variance_fieldsKeySpecifier = (
  | 'grade'
  | practice_to_student_variance_fieldsKeySpecifier
)[];
export type practice_to_student_variance_fieldsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_yieldKeySpecifier = (
  | 'created_at'
  | 'gitea_org_and_repo'
  | 'id'
  | 'practice_to_student'
  | 'practice_to_student_id'
  | 'practice_yield'
  | 'practice_yield_id'
  | 'updated_at'
  | 'value'
  | practice_to_student_yieldKeySpecifier
)[];
export type practice_to_student_yieldFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  gitea_org_and_repo?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_yield_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_to_student_yield_aggregateKeySpecifier
)[];
export type practice_to_student_yield_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_yield_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | practice_to_student_yield_aggregate_fieldsKeySpecifier
)[];
export type practice_to_student_yield_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_yield_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'gitea_org_and_repo'
  | 'id'
  | 'practice_to_student_id'
  | 'practice_yield_id'
  | 'updated_at'
  | 'value'
  | practice_to_student_yield_max_fieldsKeySpecifier
)[];
export type practice_to_student_yield_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  gitea_org_and_repo?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_yield_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'gitea_org_and_repo'
  | 'id'
  | 'practice_to_student_id'
  | 'practice_yield_id'
  | 'updated_at'
  | 'value'
  | practice_to_student_yield_min_fieldsKeySpecifier
)[];
export type practice_to_student_yield_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  gitea_org_and_repo?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_to_student_yield_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_to_student_yield_mutation_responseKeySpecifier
)[];
export type practice_to_student_yield_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yieldKeySpecifier = (
  | 'created_at'
  | 'description'
  | 'id'
  | 'meta'
  | 'method'
  | 'name'
  | 'practice'
  | 'practice_grade_metrics'
  | 'practice_grade_metrics_aggregate'
  | 'practice_id'
  | 'practice_to_student_yields'
  | 'practice_to_student_yields_aggregate'
  | 'practice_yield_type'
  | 'updated_at'
  | practice_yieldKeySpecifier
)[];
export type practice_yieldFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
  method?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metrics?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metrics_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_yields?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_yields_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_yield_type?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_yield_aggregateKeySpecifier
)[];
export type practice_yield_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | practice_yield_aggregate_fieldsKeySpecifier
)[];
export type practice_yield_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'description'
  | 'id'
  | 'name'
  | 'practice_id'
  | 'updated_at'
  | practice_yield_max_fieldsKeySpecifier
)[];
export type practice_yield_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'description'
  | 'id'
  | 'name'
  | 'practice_id'
  | 'updated_at'
  | practice_yield_min_fieldsKeySpecifier
)[];
export type practice_yield_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_yield_mutation_responseKeySpecifier
)[];
export type practice_yield_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_typeKeySpecifier = (
  | 'name'
  | 'practice_yields'
  | 'practice_yields_aggregate'
  | practice_yield_typeKeySpecifier
)[];
export type practice_yield_typeFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yields?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yields_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_type_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | practice_yield_type_aggregateKeySpecifier
)[];
export type practice_yield_type_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_type_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | practice_yield_type_aggregate_fieldsKeySpecifier
)[];
export type practice_yield_type_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_type_max_fieldsKeySpecifier = (
  | 'name'
  | practice_yield_type_max_fieldsKeySpecifier
)[];
export type practice_yield_type_max_fieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_type_min_fieldsKeySpecifier = (
  | 'name'
  | practice_yield_type_min_fieldsKeySpecifier
)[];
export type practice_yield_type_min_fieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type practice_yield_type_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | practice_yield_type_mutation_responseKeySpecifier
)[];
export type practice_yield_type_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type promotionKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'name'
  | 'practice_to_promotions'
  | 'practice_to_promotions_aggregate'
  | 'student_to_promotions'
  | 'student_to_promotions_aggregate'
  | 'updated_at'
  | 'years'
  | promotionKeySpecifier
)[];
export type promotionFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotions?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotions?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  years?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type promotion_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | promotion_aggregateKeySpecifier
)[];
export type promotion_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type promotion_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | promotion_aggregate_fieldsKeySpecifier
)[];
export type promotion_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type promotion_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'name'
  | 'updated_at'
  | 'years'
  | promotion_max_fieldsKeySpecifier
)[];
export type promotion_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  years?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type promotion_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'id'
  | 'name'
  | 'updated_at'
  | 'years'
  | promotion_min_fieldsKeySpecifier
)[];
export type promotion_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  years?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type promotion_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | promotion_mutation_responseKeySpecifier
)[];
export type promotion_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type query_rootKeySpecifier = (
  | 'practice'
  | 'practice_aggregate'
  | 'practice_by_pk'
  | 'practice_grade_metric'
  | 'practice_grade_metric_aggregate'
  | 'practice_grade_metric_by_pk'
  | 'practice_grade_metric_type'
  | 'practice_grade_metric_type_aggregate'
  | 'practice_grade_metric_type_by_pk'
  | 'practice_to_promotion'
  | 'practice_to_promotion_aggregate'
  | 'practice_to_promotion_by_pk'
  | 'practice_to_student'
  | 'practice_to_student_aggregate'
  | 'practice_to_student_by_pk'
  | 'practice_to_student_grade_metric'
  | 'practice_to_student_grade_metric_aggregate'
  | 'practice_to_student_grade_metric_by_pk'
  | 'practice_to_student_yield'
  | 'practice_to_student_yield_aggregate'
  | 'practice_to_student_yield_by_pk'
  | 'practice_yield'
  | 'practice_yield_aggregate'
  | 'practice_yield_by_pk'
  | 'practice_yield_type'
  | 'practice_yield_type_aggregate'
  | 'practice_yield_type_by_pk'
  | 'promotion'
  | 'promotion_aggregate'
  | 'promotion_by_pk'
  | 'student'
  | 'student_aggregate'
  | 'student_by_pk'
  | 'student_to_promotion'
  | 'student_to_promotion_aggregate'
  | 'student_to_promotion_by_pk'
  | 'user'
  | 'userAggregate'
  | 'userByPk'
  | query_rootKeySpecifier
)[];
export type query_rootFieldPolicy = {
  practice?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_type?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_type_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_grade_metric_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metric_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_grade_metric_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_yield_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_yield_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_type?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  student?: FieldPolicy<any> | FieldReadFunction<any>;
  student_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotion_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userAggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  userByPk?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type studentKeySpecifier = (
  | 'claim_token'
  | 'created_at'
  | 'email'
  | 'first_name'
  | 'full_name'
  | 'id'
  | 'last_name'
  | 'practice_to_students'
  | 'practice_to_students_aggregate'
  | 'student_to_promotions'
  | 'student_to_promotions_aggregate'
  | 'updated_at'
  | 'user'
  | 'user_id'
  | studentKeySpecifier
)[];
export type studentFieldPolicy = {
  claim_token?: FieldPolicy<any> | FieldReadFunction<any>;
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  first_name?: FieldPolicy<any> | FieldReadFunction<any>;
  full_name?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  last_name?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_students?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_students_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotions?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  user_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | student_aggregateKeySpecifier
)[];
export type student_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | student_aggregate_fieldsKeySpecifier
)[];
export type student_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_max_fieldsKeySpecifier = (
  | 'claim_token'
  | 'created_at'
  | 'email'
  | 'first_name'
  | 'id'
  | 'last_name'
  | 'updated_at'
  | 'user_id'
  | student_max_fieldsKeySpecifier
)[];
export type student_max_fieldsFieldPolicy = {
  claim_token?: FieldPolicy<any> | FieldReadFunction<any>;
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  first_name?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  last_name?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  user_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_min_fieldsKeySpecifier = (
  | 'claim_token'
  | 'created_at'
  | 'email'
  | 'first_name'
  | 'id'
  | 'last_name'
  | 'updated_at'
  | 'user_id'
  | student_min_fieldsKeySpecifier
)[];
export type student_min_fieldsFieldPolicy = {
  claim_token?: FieldPolicy<any> | FieldReadFunction<any>;
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  first_name?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  last_name?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
  user_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | student_mutation_responseKeySpecifier
)[];
export type student_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_to_promotionKeySpecifier = (
  | 'created_at'
  | 'promotion'
  | 'promotion_id'
  | 'student'
  | 'student_id'
  | 'updated_at'
  | student_to_promotionKeySpecifier
)[];
export type student_to_promotionFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_id?: FieldPolicy<any> | FieldReadFunction<any>;
  student?: FieldPolicy<any> | FieldReadFunction<any>;
  student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_to_promotion_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | student_to_promotion_aggregateKeySpecifier
)[];
export type student_to_promotion_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_to_promotion_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | student_to_promotion_aggregate_fieldsKeySpecifier
)[];
export type student_to_promotion_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_to_promotion_max_fieldsKeySpecifier = (
  | 'created_at'
  | 'promotion_id'
  | 'student_id'
  | 'updated_at'
  | student_to_promotion_max_fieldsKeySpecifier
)[];
export type student_to_promotion_max_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_id?: FieldPolicy<any> | FieldReadFunction<any>;
  student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_to_promotion_min_fieldsKeySpecifier = (
  | 'created_at'
  | 'promotion_id'
  | 'student_id'
  | 'updated_at'
  | student_to_promotion_min_fieldsKeySpecifier
)[];
export type student_to_promotion_min_fieldsFieldPolicy = {
  created_at?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_id?: FieldPolicy<any> | FieldReadFunction<any>;
  student_id?: FieldPolicy<any> | FieldReadFunction<any>;
  updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type student_to_promotion_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | student_to_promotion_mutation_responseKeySpecifier
)[];
export type student_to_promotion_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type subscription_rootKeySpecifier = (
  | 'practice'
  | 'practice_aggregate'
  | 'practice_by_pk'
  | 'practice_grade_metric'
  | 'practice_grade_metric_aggregate'
  | 'practice_grade_metric_by_pk'
  | 'practice_grade_metric_type'
  | 'practice_grade_metric_type_aggregate'
  | 'practice_grade_metric_type_by_pk'
  | 'practice_to_promotion'
  | 'practice_to_promotion_aggregate'
  | 'practice_to_promotion_by_pk'
  | 'practice_to_student'
  | 'practice_to_student_aggregate'
  | 'practice_to_student_by_pk'
  | 'practice_to_student_grade_metric'
  | 'practice_to_student_grade_metric_aggregate'
  | 'practice_to_student_grade_metric_by_pk'
  | 'practice_to_student_yield'
  | 'practice_to_student_yield_aggregate'
  | 'practice_to_student_yield_by_pk'
  | 'practice_yield'
  | 'practice_yield_aggregate'
  | 'practice_yield_by_pk'
  | 'practice_yield_type'
  | 'practice_yield_type_aggregate'
  | 'practice_yield_type_by_pk'
  | 'promotion'
  | 'promotion_aggregate'
  | 'promotion_by_pk'
  | 'student'
  | 'student_aggregate'
  | 'student_by_pk'
  | 'student_to_promotion'
  | 'student_to_promotion_aggregate'
  | 'student_to_promotion_by_pk'
  | 'user'
  | 'userAggregate'
  | 'userByPk'
  | subscription_rootKeySpecifier
)[];
export type subscription_rootFieldPolicy = {
  practice?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_type?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_grade_metric_type_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_grade_metric_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metric?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_grade_metric_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_grade_metric_by_pk?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_to_student_yield_aggregate?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  practice_to_student_yield_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_type?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  practice_yield_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  student?: FieldPolicy<any> | FieldReadFunction<any>;
  student_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  student_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotion?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotion_aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  student_to_promotion_by_pk?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userAggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  userByPk?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type userKeySpecifier = (
  | 'createdAt'
  | 'displayName'
  | 'email'
  | 'firebaseId'
  | 'id'
  | 'photoUrl'
  | 'student'
  | 'updatedAt'
  | userKeySpecifier
)[];
export type userFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  firebaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  photoUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  student?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type user_aggregateKeySpecifier = (
  | 'aggregate'
  | 'nodes'
  | user_aggregateKeySpecifier
)[];
export type user_aggregateFieldPolicy = {
  aggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type user_aggregate_fieldsKeySpecifier = (
  | 'count'
  | 'max'
  | 'min'
  | user_aggregate_fieldsKeySpecifier
)[];
export type user_aggregate_fieldsFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type user_max_fieldsKeySpecifier = (
  | 'createdAt'
  | 'displayName'
  | 'email'
  | 'firebaseId'
  | 'id'
  | 'photoUrl'
  | 'updatedAt'
  | user_max_fieldsKeySpecifier
)[];
export type user_max_fieldsFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  firebaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  photoUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type user_min_fieldsKeySpecifier = (
  | 'createdAt'
  | 'displayName'
  | 'email'
  | 'firebaseId'
  | 'id'
  | 'photoUrl'
  | 'updatedAt'
  | user_min_fieldsKeySpecifier
)[];
export type user_min_fieldsFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  firebaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  photoUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type user_mutation_responseKeySpecifier = (
  | 'affected_rows'
  | 'returning'
  | user_mutation_responseKeySpecifier
)[];
export type user_mutation_responseFieldPolicy = {
  affected_rows?: FieldPolicy<any> | FieldReadFunction<any>;
  returning?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
  InsertStudentAnswerOutput?: {
    keyFields:
      | false
      | InsertStudentAnswerOutputKeySpecifier
      | (() => undefined | InsertStudentAnswerOutputKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: InsertStudentAnswerOutputFieldPolicy;
  };
  SendStudentClaimMailOutput?: {
    keyFields:
      | false
      | SendStudentClaimMailOutputKeySpecifier
      | (() => undefined | SendStudentClaimMailOutputKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SendStudentClaimMailOutputFieldPolicy;
  };
  SubmitHandoffOutput?: {
    keyFields:
      | false
      | SubmitHandoffOutputKeySpecifier
      | (() => undefined | SubmitHandoffOutputKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: SubmitHandoffOutputFieldPolicy;
  };
  linkStudentToUserOutput?: {
    keyFields:
      | false
      | linkStudentToUserOutputKeySpecifier
      | (() => undefined | linkStudentToUserOutputKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: linkStudentToUserOutputFieldPolicy;
  };
  mutation_root?: {
    keyFields:
      | false
      | mutation_rootKeySpecifier
      | (() => undefined | mutation_rootKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: mutation_rootFieldPolicy;
  };
  practice?: {
    keyFields:
      | false
      | practiceKeySpecifier
      | (() => undefined | practiceKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practiceFieldPolicy;
  };
  practice_aggregate?: {
    keyFields:
      | false
      | practice_aggregateKeySpecifier
      | (() => undefined | practice_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_aggregateFieldPolicy;
  };
  practice_aggregate_fields?: {
    keyFields:
      | false
      | practice_aggregate_fieldsKeySpecifier
      | (() => undefined | practice_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_aggregate_fieldsFieldPolicy;
  };
  practice_grade_metric?: {
    keyFields:
      | false
      | practice_grade_metricKeySpecifier
      | (() => undefined | practice_grade_metricKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metricFieldPolicy;
  };
  practice_grade_metric_aggregate?: {
    keyFields:
      | false
      | practice_grade_metric_aggregateKeySpecifier
      | (() => undefined | practice_grade_metric_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_aggregateFieldPolicy;
  };
  practice_grade_metric_aggregate_fields?: {
    keyFields:
      | false
      | practice_grade_metric_aggregate_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_aggregate_fieldsFieldPolicy;
  };
  practice_grade_metric_avg_fields?: {
    keyFields:
      | false
      | practice_grade_metric_avg_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_avg_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_avg_fieldsFieldPolicy;
  };
  practice_grade_metric_max_fields?: {
    keyFields:
      | false
      | practice_grade_metric_max_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_max_fieldsFieldPolicy;
  };
  practice_grade_metric_min_fields?: {
    keyFields:
      | false
      | practice_grade_metric_min_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_min_fieldsFieldPolicy;
  };
  practice_grade_metric_mutation_response?: {
    keyFields:
      | false
      | practice_grade_metric_mutation_responseKeySpecifier
      | (() => undefined | practice_grade_metric_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_mutation_responseFieldPolicy;
  };
  practice_grade_metric_stddev_fields?: {
    keyFields:
      | false
      | practice_grade_metric_stddev_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_stddev_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_stddev_fieldsFieldPolicy;
  };
  practice_grade_metric_stddev_pop_fields?: {
    keyFields:
      | false
      | practice_grade_metric_stddev_pop_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_stddev_pop_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_stddev_pop_fieldsFieldPolicy;
  };
  practice_grade_metric_stddev_samp_fields?: {
    keyFields:
      | false
      | practice_grade_metric_stddev_samp_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_grade_metric_stddev_samp_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_stddev_samp_fieldsFieldPolicy;
  };
  practice_grade_metric_sum_fields?: {
    keyFields:
      | false
      | practice_grade_metric_sum_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_sum_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_sum_fieldsFieldPolicy;
  };
  practice_grade_metric_type?: {
    keyFields:
      | false
      | practice_grade_metric_typeKeySpecifier
      | (() => undefined | practice_grade_metric_typeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_typeFieldPolicy;
  };
  practice_grade_metric_type_aggregate?: {
    keyFields:
      | false
      | practice_grade_metric_type_aggregateKeySpecifier
      | (() => undefined | practice_grade_metric_type_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_type_aggregateFieldPolicy;
  };
  practice_grade_metric_type_aggregate_fields?: {
    keyFields:
      | false
      | practice_grade_metric_type_aggregate_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_grade_metric_type_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_type_aggregate_fieldsFieldPolicy;
  };
  practice_grade_metric_type_max_fields?: {
    keyFields:
      | false
      | practice_grade_metric_type_max_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_type_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_type_max_fieldsFieldPolicy;
  };
  practice_grade_metric_type_min_fields?: {
    keyFields:
      | false
      | practice_grade_metric_type_min_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_type_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_type_min_fieldsFieldPolicy;
  };
  practice_grade_metric_type_mutation_response?: {
    keyFields:
      | false
      | practice_grade_metric_type_mutation_responseKeySpecifier
      | (() =>
          | undefined
          | practice_grade_metric_type_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_type_mutation_responseFieldPolicy;
  };
  practice_grade_metric_var_pop_fields?: {
    keyFields:
      | false
      | practice_grade_metric_var_pop_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_var_pop_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_var_pop_fieldsFieldPolicy;
  };
  practice_grade_metric_var_samp_fields?: {
    keyFields:
      | false
      | practice_grade_metric_var_samp_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_var_samp_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_var_samp_fieldsFieldPolicy;
  };
  practice_grade_metric_variance_fields?: {
    keyFields:
      | false
      | practice_grade_metric_variance_fieldsKeySpecifier
      | (() => undefined | practice_grade_metric_variance_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_grade_metric_variance_fieldsFieldPolicy;
  };
  practice_max_fields?: {
    keyFields:
      | false
      | practice_max_fieldsKeySpecifier
      | (() => undefined | practice_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_max_fieldsFieldPolicy;
  };
  practice_min_fields?: {
    keyFields:
      | false
      | practice_min_fieldsKeySpecifier
      | (() => undefined | practice_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_min_fieldsFieldPolicy;
  };
  practice_mutation_response?: {
    keyFields:
      | false
      | practice_mutation_responseKeySpecifier
      | (() => undefined | practice_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_mutation_responseFieldPolicy;
  };
  practice_to_promotion?: {
    keyFields:
      | false
      | practice_to_promotionKeySpecifier
      | (() => undefined | practice_to_promotionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_promotionFieldPolicy;
  };
  practice_to_promotion_aggregate?: {
    keyFields:
      | false
      | practice_to_promotion_aggregateKeySpecifier
      | (() => undefined | practice_to_promotion_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_promotion_aggregateFieldPolicy;
  };
  practice_to_promotion_aggregate_fields?: {
    keyFields:
      | false
      | practice_to_promotion_aggregate_fieldsKeySpecifier
      | (() => undefined | practice_to_promotion_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_promotion_aggregate_fieldsFieldPolicy;
  };
  practice_to_promotion_max_fields?: {
    keyFields:
      | false
      | practice_to_promotion_max_fieldsKeySpecifier
      | (() => undefined | practice_to_promotion_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_promotion_max_fieldsFieldPolicy;
  };
  practice_to_promotion_min_fields?: {
    keyFields:
      | false
      | practice_to_promotion_min_fieldsKeySpecifier
      | (() => undefined | practice_to_promotion_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_promotion_min_fieldsFieldPolicy;
  };
  practice_to_promotion_mutation_response?: {
    keyFields:
      | false
      | practice_to_promotion_mutation_responseKeySpecifier
      | (() => undefined | practice_to_promotion_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_promotion_mutation_responseFieldPolicy;
  };
  practice_to_student?: {
    keyFields:
      | false
      | practice_to_studentKeySpecifier
      | (() => undefined | practice_to_studentKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_studentFieldPolicy;
  };
  practice_to_student_aggregate?: {
    keyFields:
      | false
      | practice_to_student_aggregateKeySpecifier
      | (() => undefined | practice_to_student_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_aggregateFieldPolicy;
  };
  practice_to_student_aggregate_fields?: {
    keyFields:
      | false
      | practice_to_student_aggregate_fieldsKeySpecifier
      | (() => undefined | practice_to_student_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_aggregate_fieldsFieldPolicy;
  };
  practice_to_student_avg_fields?: {
    keyFields:
      | false
      | practice_to_student_avg_fieldsKeySpecifier
      | (() => undefined | practice_to_student_avg_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_avg_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric?: {
    keyFields:
      | false
      | practice_to_student_grade_metricKeySpecifier
      | (() => undefined | practice_to_student_grade_metricKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metricFieldPolicy;
  };
  practice_to_student_grade_metric_aggregate?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_aggregateKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_aggregateFieldPolicy;
  };
  practice_to_student_grade_metric_aggregate_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_aggregate_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_aggregate_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_avg_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_avg_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_avg_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_avg_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_max_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_max_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_max_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_min_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_min_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_min_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_mutation_response?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_mutation_responseKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_mutation_responseFieldPolicy;
  };
  practice_to_student_grade_metric_stddev_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_stddev_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_stddev_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_stddev_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_stddev_pop_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_stddev_pop_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_stddev_pop_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_stddev_pop_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_stddev_samp_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_stddev_samp_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_stddev_samp_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_stddev_samp_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_sum_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_sum_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_sum_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_sum_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_var_pop_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_var_pop_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_var_pop_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_var_pop_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_var_samp_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_var_samp_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_var_samp_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_var_samp_fieldsFieldPolicy;
  };
  practice_to_student_grade_metric_variance_fields?: {
    keyFields:
      | false
      | practice_to_student_grade_metric_variance_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_grade_metric_variance_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_grade_metric_variance_fieldsFieldPolicy;
  };
  practice_to_student_max_fields?: {
    keyFields:
      | false
      | practice_to_student_max_fieldsKeySpecifier
      | (() => undefined | practice_to_student_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_max_fieldsFieldPolicy;
  };
  practice_to_student_min_fields?: {
    keyFields:
      | false
      | practice_to_student_min_fieldsKeySpecifier
      | (() => undefined | practice_to_student_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_min_fieldsFieldPolicy;
  };
  practice_to_student_mutation_response?: {
    keyFields:
      | false
      | practice_to_student_mutation_responseKeySpecifier
      | (() => undefined | practice_to_student_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_mutation_responseFieldPolicy;
  };
  practice_to_student_stddev_fields?: {
    keyFields:
      | false
      | practice_to_student_stddev_fieldsKeySpecifier
      | (() => undefined | practice_to_student_stddev_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_stddev_fieldsFieldPolicy;
  };
  practice_to_student_stddev_pop_fields?: {
    keyFields:
      | false
      | practice_to_student_stddev_pop_fieldsKeySpecifier
      | (() => undefined | practice_to_student_stddev_pop_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_stddev_pop_fieldsFieldPolicy;
  };
  practice_to_student_stddev_samp_fields?: {
    keyFields:
      | false
      | practice_to_student_stddev_samp_fieldsKeySpecifier
      | (() => undefined | practice_to_student_stddev_samp_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_stddev_samp_fieldsFieldPolicy;
  };
  practice_to_student_sum_fields?: {
    keyFields:
      | false
      | practice_to_student_sum_fieldsKeySpecifier
      | (() => undefined | practice_to_student_sum_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_sum_fieldsFieldPolicy;
  };
  practice_to_student_var_pop_fields?: {
    keyFields:
      | false
      | practice_to_student_var_pop_fieldsKeySpecifier
      | (() => undefined | practice_to_student_var_pop_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_var_pop_fieldsFieldPolicy;
  };
  practice_to_student_var_samp_fields?: {
    keyFields:
      | false
      | practice_to_student_var_samp_fieldsKeySpecifier
      | (() => undefined | practice_to_student_var_samp_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_var_samp_fieldsFieldPolicy;
  };
  practice_to_student_variance_fields?: {
    keyFields:
      | false
      | practice_to_student_variance_fieldsKeySpecifier
      | (() => undefined | practice_to_student_variance_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_variance_fieldsFieldPolicy;
  };
  practice_to_student_yield?: {
    keyFields:
      | false
      | practice_to_student_yieldKeySpecifier
      | (() => undefined | practice_to_student_yieldKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_yieldFieldPolicy;
  };
  practice_to_student_yield_aggregate?: {
    keyFields:
      | false
      | practice_to_student_yield_aggregateKeySpecifier
      | (() => undefined | practice_to_student_yield_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_yield_aggregateFieldPolicy;
  };
  practice_to_student_yield_aggregate_fields?: {
    keyFields:
      | false
      | practice_to_student_yield_aggregate_fieldsKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_yield_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_yield_aggregate_fieldsFieldPolicy;
  };
  practice_to_student_yield_max_fields?: {
    keyFields:
      | false
      | practice_to_student_yield_max_fieldsKeySpecifier
      | (() => undefined | practice_to_student_yield_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_yield_max_fieldsFieldPolicy;
  };
  practice_to_student_yield_min_fields?: {
    keyFields:
      | false
      | practice_to_student_yield_min_fieldsKeySpecifier
      | (() => undefined | practice_to_student_yield_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_yield_min_fieldsFieldPolicy;
  };
  practice_to_student_yield_mutation_response?: {
    keyFields:
      | false
      | practice_to_student_yield_mutation_responseKeySpecifier
      | (() =>
          | undefined
          | practice_to_student_yield_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_to_student_yield_mutation_responseFieldPolicy;
  };
  practice_yield?: {
    keyFields:
      | false
      | practice_yieldKeySpecifier
      | (() => undefined | practice_yieldKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yieldFieldPolicy;
  };
  practice_yield_aggregate?: {
    keyFields:
      | false
      | practice_yield_aggregateKeySpecifier
      | (() => undefined | practice_yield_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_aggregateFieldPolicy;
  };
  practice_yield_aggregate_fields?: {
    keyFields:
      | false
      | practice_yield_aggregate_fieldsKeySpecifier
      | (() => undefined | practice_yield_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_aggregate_fieldsFieldPolicy;
  };
  practice_yield_max_fields?: {
    keyFields:
      | false
      | practice_yield_max_fieldsKeySpecifier
      | (() => undefined | practice_yield_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_max_fieldsFieldPolicy;
  };
  practice_yield_min_fields?: {
    keyFields:
      | false
      | practice_yield_min_fieldsKeySpecifier
      | (() => undefined | practice_yield_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_min_fieldsFieldPolicy;
  };
  practice_yield_mutation_response?: {
    keyFields:
      | false
      | practice_yield_mutation_responseKeySpecifier
      | (() => undefined | practice_yield_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_mutation_responseFieldPolicy;
  };
  practice_yield_type?: {
    keyFields:
      | false
      | practice_yield_typeKeySpecifier
      | (() => undefined | practice_yield_typeKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_typeFieldPolicy;
  };
  practice_yield_type_aggregate?: {
    keyFields:
      | false
      | practice_yield_type_aggregateKeySpecifier
      | (() => undefined | practice_yield_type_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_type_aggregateFieldPolicy;
  };
  practice_yield_type_aggregate_fields?: {
    keyFields:
      | false
      | practice_yield_type_aggregate_fieldsKeySpecifier
      | (() => undefined | practice_yield_type_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_type_aggregate_fieldsFieldPolicy;
  };
  practice_yield_type_max_fields?: {
    keyFields:
      | false
      | practice_yield_type_max_fieldsKeySpecifier
      | (() => undefined | practice_yield_type_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_type_max_fieldsFieldPolicy;
  };
  practice_yield_type_min_fields?: {
    keyFields:
      | false
      | practice_yield_type_min_fieldsKeySpecifier
      | (() => undefined | practice_yield_type_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_type_min_fieldsFieldPolicy;
  };
  practice_yield_type_mutation_response?: {
    keyFields:
      | false
      | practice_yield_type_mutation_responseKeySpecifier
      | (() => undefined | practice_yield_type_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: practice_yield_type_mutation_responseFieldPolicy;
  };
  promotion?: {
    keyFields:
      | false
      | promotionKeySpecifier
      | (() => undefined | promotionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: promotionFieldPolicy;
  };
  promotion_aggregate?: {
    keyFields:
      | false
      | promotion_aggregateKeySpecifier
      | (() => undefined | promotion_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: promotion_aggregateFieldPolicy;
  };
  promotion_aggregate_fields?: {
    keyFields:
      | false
      | promotion_aggregate_fieldsKeySpecifier
      | (() => undefined | promotion_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: promotion_aggregate_fieldsFieldPolicy;
  };
  promotion_max_fields?: {
    keyFields:
      | false
      | promotion_max_fieldsKeySpecifier
      | (() => undefined | promotion_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: promotion_max_fieldsFieldPolicy;
  };
  promotion_min_fields?: {
    keyFields:
      | false
      | promotion_min_fieldsKeySpecifier
      | (() => undefined | promotion_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: promotion_min_fieldsFieldPolicy;
  };
  promotion_mutation_response?: {
    keyFields:
      | false
      | promotion_mutation_responseKeySpecifier
      | (() => undefined | promotion_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: promotion_mutation_responseFieldPolicy;
  };
  query_root?: {
    keyFields:
      | false
      | query_rootKeySpecifier
      | (() => undefined | query_rootKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: query_rootFieldPolicy;
  };
  student?: {
    keyFields:
      | false
      | studentKeySpecifier
      | (() => undefined | studentKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: studentFieldPolicy;
  };
  student_aggregate?: {
    keyFields:
      | false
      | student_aggregateKeySpecifier
      | (() => undefined | student_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_aggregateFieldPolicy;
  };
  student_aggregate_fields?: {
    keyFields:
      | false
      | student_aggregate_fieldsKeySpecifier
      | (() => undefined | student_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_aggregate_fieldsFieldPolicy;
  };
  student_max_fields?: {
    keyFields:
      | false
      | student_max_fieldsKeySpecifier
      | (() => undefined | student_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_max_fieldsFieldPolicy;
  };
  student_min_fields?: {
    keyFields:
      | false
      | student_min_fieldsKeySpecifier
      | (() => undefined | student_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_min_fieldsFieldPolicy;
  };
  student_mutation_response?: {
    keyFields:
      | false
      | student_mutation_responseKeySpecifier
      | (() => undefined | student_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_mutation_responseFieldPolicy;
  };
  student_to_promotion?: {
    keyFields:
      | false
      | student_to_promotionKeySpecifier
      | (() => undefined | student_to_promotionKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_to_promotionFieldPolicy;
  };
  student_to_promotion_aggregate?: {
    keyFields:
      | false
      | student_to_promotion_aggregateKeySpecifier
      | (() => undefined | student_to_promotion_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_to_promotion_aggregateFieldPolicy;
  };
  student_to_promotion_aggregate_fields?: {
    keyFields:
      | false
      | student_to_promotion_aggregate_fieldsKeySpecifier
      | (() => undefined | student_to_promotion_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_to_promotion_aggregate_fieldsFieldPolicy;
  };
  student_to_promotion_max_fields?: {
    keyFields:
      | false
      | student_to_promotion_max_fieldsKeySpecifier
      | (() => undefined | student_to_promotion_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_to_promotion_max_fieldsFieldPolicy;
  };
  student_to_promotion_min_fields?: {
    keyFields:
      | false
      | student_to_promotion_min_fieldsKeySpecifier
      | (() => undefined | student_to_promotion_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_to_promotion_min_fieldsFieldPolicy;
  };
  student_to_promotion_mutation_response?: {
    keyFields:
      | false
      | student_to_promotion_mutation_responseKeySpecifier
      | (() => undefined | student_to_promotion_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: student_to_promotion_mutation_responseFieldPolicy;
  };
  subscription_root?: {
    keyFields:
      | false
      | subscription_rootKeySpecifier
      | (() => undefined | subscription_rootKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: subscription_rootFieldPolicy;
  };
  user?: {
    keyFields: false | userKeySpecifier | (() => undefined | userKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: userFieldPolicy;
  };
  user_aggregate?: {
    keyFields:
      | false
      | user_aggregateKeySpecifier
      | (() => undefined | user_aggregateKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: user_aggregateFieldPolicy;
  };
  user_aggregate_fields?: {
    keyFields:
      | false
      | user_aggregate_fieldsKeySpecifier
      | (() => undefined | user_aggregate_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: user_aggregate_fieldsFieldPolicy;
  };
  user_max_fields?: {
    keyFields:
      | false
      | user_max_fieldsKeySpecifier
      | (() => undefined | user_max_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: user_max_fieldsFieldPolicy;
  };
  user_min_fields?: {
    keyFields:
      | false
      | user_min_fieldsKeySpecifier
      | (() => undefined | user_min_fieldsKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: user_min_fieldsFieldPolicy;
  };
  user_mutation_response?: {
    keyFields:
      | false
      | user_mutation_responseKeySpecifier
      | (() => undefined | user_mutation_responseKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: user_mutation_responseFieldPolicy;
  };
};

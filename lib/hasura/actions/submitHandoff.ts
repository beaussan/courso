import { gqlSdk } from '@lib/gql';
import * as yup from 'yup';
import { ActionMap } from './types';
import { HttpsError } from '@lib/common/HttpsError';

const argValidation = yup.object().shape({
  practiceToPromotionId: yup.string().uuid().required(),
  yields: yup.array().of(
    yup.object({
      yieldId: yup.string().uuid().required(),
      value: yup.string(),
    }),
  ),
});

export const submitHandoff: ActionMap['submitHandoff'] = async (
  args,
  sessionVars,
) => {
  await argValidation.validate(args);
  const { practice_to_course_by_pk } = await gqlSdk.dataForSubmitHandoff({
    practiceToPromoId: args.practiceToPromotionId,
    userId: sessionVars['x-hasura-user-id'],
  });

  if (!practice_to_course_by_pk) {
    throw new HttpsError('not-found', 'Not found');
  }
  if ((practice_to_course_by_pk.course.student_to_courses.length ?? 0) === 0) {
    throw new HttpsError('not-found', 'Not found');
  }
  if (!practice_to_course_by_pk.practice?.id) {
    throw new HttpsError('not-found', 'Not found');
  }
  if (!practice_to_course_by_pk.practice.practice_yields) {
    throw new HttpsError('not-found', 'Not found');
  }
  const userYieldsId = args.yields.map(({ yieldId }) => yieldId);
  const serverYieldsIds = practice_to_course_by_pk.practice.practice_yields.map(
    ({ id }) => id,
  );
  if (userYieldsId.length !== serverYieldsIds.length) {
    throw new HttpsError('not-found', 'Not found');
  }
  if (!serverYieldsIds.every((item) => userYieldsId.includes(item))) {
    throw new HttpsError('invalid-argument', 'Invalid yields');
  }

  if (practice_to_course_by_pk.practice_to_students.length > 0) {
    throw new HttpsError('invalid-argument', 'Already submitted');
  }
  if (!practice_to_course_by_pk.is_open) {
    throw new HttpsError('invalid-argument', 'Submit is not open');
  }

  await gqlSdk.mutationSubmitHandoff({
    student_id:
      practice_to_course_by_pk.course.student_to_courses[0].student_id,
    promotion_practice_id: args.practiceToPromotionId,
    studentYields: args.yields.map(({ yieldId, value }) => ({
      value,
      practice_yield_id: yieldId,
    })),
  });

  return {
    status: 'ok',
  };
};

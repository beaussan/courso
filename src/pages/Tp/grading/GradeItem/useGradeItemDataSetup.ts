import { useArrayNavigator } from '../../../../hooks/useArrayNavigator';
import { useCallback, useMemo } from 'react';
import {
  GetPracticeToStudentForGradingQuery,
  ParacticeToStudentGradeMetricForGradingFragment,
  Practice_To_Student_Grade_Metric_Insert_Input,
  useInsertPracticeToStudentGradeMetricMutation,
} from '../../../../generated/graphql';
import { useFormikMutationSubmit } from '../../../../hooks/useFormikMutationSubmit';
import { FormikHelpers } from 'formik';

type ItemGrading = GetPracticeToStudentForGradingQuery['practice_yield_expected_output'][0];
type ItemToLook = ItemGrading['practice_yield']['practice_to_student_yields'][0];

interface GradeItemFormType {
  [key: string]: {
    feedbacks: string[];
    grade: string;
  };
}

type useGradeItemDataType = (props: {
  data: ItemGrading;
  goNext?: () => void;
  goPrev?: () => void;
  isFirstBlock: boolean;
  isLastBlock: boolean;
}) => {
  initialFormValue: GradeItemFormType;
  onSubmit: (
    values: GradeItemFormType,
    formikHelpers: FormikHelpers<GradeItemFormType>,
  ) => Promise<void>;
  item?: ItemToLook;
  goNextStep: () => void;
  goPreviousStep: () => void;
  isLastInGroup: boolean;
  isFirstInGroup: boolean;
  isFirstItemEver: boolean;
  isLastItemEver: boolean;
  position: number;
  maybeGradeForStudents: {
    [key: string]: ParacticeToStudentGradeMetricForGradingFragment | undefined;
  };
};

export const useGradeItemDataSetup: useGradeItemDataType = ({
  data,
  goNext,
  goPrev,
  isFirstBlock,
  isLastBlock,
}) => {
  const {
    item,
    goNext: nextItem,
    isLast,
    isFirst,
    goPrev: prevItem,
    goFirst,
    goLast,
    position,
  } = useArrayNavigator(data.practice_yield.practice_to_student_yields);

  const isLastItemEver = useMemo(() => isLast && isLastBlock, [
    isLast,
    isLastBlock,
  ]);
  const isFirstItemEver = useMemo(() => isFirst && isFirstBlock, [
    isFirst,
    isFirstBlock,
  ]);

  const goNextStep = useCallback(() => {
    if (isLast) {
      if (isLastBlock) {
        return;
      }
      goNext?.();
      goFirst();
    } else {
      nextItem();
    }
  }, [goFirst, goNext, isLast, isLastBlock, nextItem]);

  const goPreviousStep = useCallback(() => {
    if (isFirst) {
      if (isFirstBlock) {
        return;
      }
      goPrev?.();
      goLast();
    } else {
      prevItem();
    }
  }, [goLast, goPrev, isFirst, isFirstBlock, prevItem]);

  const maybeGradeForStudents = useMemo<{
    [key: string]: ParacticeToStudentGradeMetricForGradingFragment | undefined;
  }>(() => {
    return data.practice_yield_grade_metrics
      .map((tm) => ({
        [tm.id]: tm.practice_to_student_grade_metrics.find(
          ({ practice_to_student_id }) =>
            practice_to_student_id === item?.practice_to_student_id,
        ),
      }))
      .reduce((prev, curr) => ({ ...prev, ...curr }), {});
  }, [data, item]);

  const [, insertNewGrade] = useInsertPracticeToStudentGradeMetricMutation();
  const onSubmit = useFormikMutationSubmit({
    mutation: insertNewGrade,
    onSuccess: (data) => {
      data.resetForm();
      goNextStep();
    },
    mapFormData: (values: GradeItemFormType) => ({
      objects: Object.entries(values).map(
        ([key, toSave]): Practice_To_Student_Grade_Metric_Insert_Input => ({
          practice_yield_grade_metric_id: key,
          feedback: toSave.feedbacks,
          percent_grade: parseInt(toSave.grade),
          practice_to_student_id: item?.practice_to_student_id,
        }),
      ),
    }),
  });
  const initialFormValue = useMemo<GradeItemFormType>(
    () =>
      data.practice_yield_grade_metrics
        .map(({ id }) => ({
          [id]: {
            feedbacks: maybeGradeForStudents?.[id]?.feedback ?? [],
            grade: `${maybeGradeForStudents?.[id]?.percent_grade}` ?? '1',
          },
        }))
        .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
    [data, maybeGradeForStudents],
  );

  return {
    initialFormValue,
    onSubmit,
    item,
    goNextStep,
    goPreviousStep,
    isLastInGroup: isLast,
    isFirstInGroup: isFirst,
    maybeGradeForStudents,
    position,
    isLastItemEver,
    isFirstItemEver,
  };
};

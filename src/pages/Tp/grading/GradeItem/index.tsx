import {
  // GetPracticeToStudentForGradingQuery,
  Practice_Yield_Expected_Output_Types_Enum,
} from '../../../../generated/graphql';
import React from 'react';
import { DebugJson } from '../../../../components/DebugJson';
import { DiffViewerLazy } from '../../../../components/CodeInput/DiffViewerLazy';
import { Button } from '../../../../components/Button';
import gql from 'graphql-tag';
import { Form, Formik } from 'formik';
import { FeedbackInputField } from './FeedbackInputField';
import { GradePercentInputField } from './GradePercentInputField';
import { Chip } from '../../../../components/Chip';
import { useGradeItemDataSetup } from './useGradeItemDataSetup';
import { PracticeToStudentForGradingFrontEdit } from './Mapper';

gql`
  mutation insertPracticeToStudentGradeMetric(
    $objects: [practice_to_student_grade_metric_insert_input!]!
  ) {
    insert_practice_to_student_grade_metric(
      objects: $objects
      on_conflict: {
        constraint: practice_to_student_grade_metric_practice_yield_grade_metric_id
        update_columns: [percent_grade, feedback]
      }
    ) {
      affected_rows
      returning {
        created_at
        feedback
        percent_grade
        id
        practice_to_student_yield_id
        practice_yield_grade_metric_id
      }
    }
  }
`;

type ItemGrading = PracticeToStudentForGradingFrontEdit;
type ItemMetric = ItemGrading['gradeMetrics'][0];
type ItemToLook = ItemGrading['studentYields'][0];

type DisplayItem = React.FC<{ expected: ItemGrading; value: ItemToLook }>;

const Dummy: DisplayItem = (props) => (
  <div>
    TODO COMPARE :<DebugJson json={props} />{' '}
  </div>
);

const CompareCodeFile: DisplayItem = ({ value, expected }) => (
  <DiffViewerLazy
    className="h-1/2"
    lang={expected.expectedOutput.code_lang as any}
    expected={expected.expectedOutput.expected ?? ''}
    got={value?.value}
  />
);

const ManualCompare: DisplayItem = ({ value, expected }) => (
  <div className="flex">
    <div className="flex-1 flex">
      <div>Expected</div>
      <div>{expected.expectedOutput.expected}</div>
    </div>
    <div className="flex-1 flex">
      <div>Got</div>
      <div>{value?.value}</div>
    </div>
  </div>
);

const UrlCompare: DisplayItem = ({ value, expected }) => (
  <div className="flex">
    <div className="flex-1 flex">
      <a rel="noopener noreferrer" href={value.value}>
        Target link : {value.value}
      </a>
    </div>
  </div>
);

const mapToShow: Record<
  Practice_Yield_Expected_Output_Types_Enum,
  DisplayItem
> = {
  COMPARE_CODE_FILE: CompareCodeFile,
  COMPARE_GIT_FILE: Dummy,
  SHOW_GIT_LOG: Dummy,
  SHOW_GIT_FILE: Dummy,
  MANUAL_GIT_FILE_REVIEW: Dummy,
  MANUAL: ManualCompare,
  LINK_OPEN: UrlCompare,
};
// practice_to_student_grade_metric

const GradeAndFeedbackItem: React.FC<{
  metric: ItemMetric;
  graded?: boolean;
}> = ({ metric, graded }) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 space-y-4 pb-4">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">
          {metric.name} ({metric.points} points)
        </div>
        {graded ? <Chip variant={'success'}>Graded</Chip> : null}
      </div>
      <FeedbackInputField
        name={`${metric.id}.feedbacks`}
        feedbacks={metric.feedbacks}
        metricId={metric.id}
      />
      <GradePercentInputField name={`${metric.id}.grade`} />
    </div>
  );
};

export const GradeItem: React.FC<{
  data: PracticeToStudentForGradingFrontEdit;
  goNext?: () => void;
  goPrev?: () => void;
  isFirstBlock: boolean;
  isLastBlock: boolean;
}> = ({ data, isFirstBlock, isLastBlock, goNext, goPrev }) => {
  const {
    item,
    onSubmit,
    initialFormValue,
    maybeGradeForStudents,
    goNextStep,
    goPreviousStep,
    position,
    isLastItemEver,
    isFirstItemEver,
  } = useGradeItemDataSetup({
    data,
    goPrev,
    goNext,
    isFirstBlock,
    isLastBlock,
  });

  const ToCompare = mapToShow[data.expectedOutput.method];
  if (!item) {
    return <div />;
  }
  return (
    <div className="flex h-full">
      <div className="w-3/4">
        <div className="font-semibold text-lg mb-2">{data.yieldName}</div>
        <ToCompare value={item} expected={data} />
      </div>
      <div className="w-1/4 px-2 h-full overflow-y-scroll space-y-4">
        <Formik
          initialValues={initialFormValue}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, isSubmitting }) => (
            <Form className="space-y-4">
              <div className="font-semibold text-lg -mb-2">
                Student {position + 1} over {data.studentYields.length}
              </div>
              {data.gradeMetrics.map((metric) => (
                <GradeAndFeedbackItem
                  metric={metric}
                  key={metric.id}
                  graded={!!maybeGradeForStudents[metric.id]}
                />
              ))}
              <div className="flex justify-center space-x-4">
                <Button
                  type="button"
                  disabled={isSubmitting || isFirstItemEver}
                  onClick={() => goPreviousStep()}
                  variant="secondary"
                >
                  Prev
                </Button>
                <Button
                  disabled={isSubmitting}
                  isFull
                  className="flex-1 w-full"
                >
                  Grade
                </Button>
                <Button
                  type="button"
                  disabled={isSubmitting || isLastItemEver}
                  onClick={() => goNextStep()}
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
              <DebugJson json={values} title="values" />
              <DebugJson json={data.gradeMetrics} title="gradeMetrics" />
              <DebugJson json={data} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

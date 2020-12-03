import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DebugJson } from '../../../components/DebugJson';
import gql from 'graphql-tag';
import { useGetPracticeToStudentForGradingQuery } from '../../../generated/graphql';
import { Loader } from '../../../components/Loader';
import { GradeItem } from './GradeItem';
import { useArrayNavigator } from '../../../hooks/useArrayNavigator';
import { FullScreen } from '../../../components/FullScreen';
import { Button } from '../../../components/Button';

gql`
  query getPracticeToStudentForGrading($courseId: uuid!, $practiceId: uuid!) {
    practice_yield_expected_output(
      where: {
        practice: {
          practice_to_courses: {
            course_id: { _eq: $courseId }
            practice_id: { _eq: $practiceId }
          }
        }
      }
    ) {
      expected
      git_path
      method
      practice_id
      code_lang
      id
      practice_yield {
        created_at
        description
        id
        meta
        method
        name
        practice_to_student_yields(
          where: {
            practice_to_student: {
              practice_to_course: {
                practice_id: { _eq: $practiceId }
                course_id: { _eq: $courseId }
              }
            }
          }
        ) {
          gitea_org_and_repo
          value
          id
          practice_to_student_id
          practice_yield_id
          created_at
          practice_to_student_id
        }
      }
      practice_yield_grade_metrics {
        feedbacks
        id
        name
        points
        practice_to_student_grade_metrics(
          where: {
            practice_to_student: {
              practice_to_course: {
                course_id: { _eq: $courseId }
                practice_id: { _eq: $practiceId }
              }
            }
          }
        ) {
          ...ParacticeToStudentGradeMetricForGrading
        }
      }
    }
  }

  fragment ParacticeToStudentGradeMetricForGrading on practice_to_student_grade_metric {
    id
    feedback
    created_at
    percent_grade
    practice_to_student_id
    practice_yield_grade_metric_id
    updated_at
  }
`;

export const Grading = () => {
  const { tpId, promoId } = useParams();
  const [{ data, fetching, error }] = useGetPracticeToStudentForGradingQuery({
    variables: {
      practiceId: tpId,
      courseId: promoId,
    },
    // pollInterval: 30000,
    // requestPolicy: 'network-only',
  });
  const { item, goNext, isLast, isFirst, goPrev } = useArrayNavigator(
    data?.practice_yield_expected_output,
  );
  useEffect(() => {}, []);
  if (fetching || !item) {
    return <Loader />;
  }

  if (error) {
    return <DebugJson json={error} />;
  }
  /*GradeItem*/
  return (
    <div>
      <FullScreen>
        <FullScreen.Trigger>
          <Button>Start grading</Button>
        </FullScreen.Trigger>
        <FullScreen.Body>
          <GradeItem
            data={item}
            goNext={goNext}
            goPrev={goPrev}
            isFirstBlock={isFirst}
            isLastBlock={isLast}
          />
        </FullScreen.Body>
      </FullScreen>
    </div>
  );
};

export default Grading;

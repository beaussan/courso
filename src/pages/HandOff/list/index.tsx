import React from 'react';
import { PageHead } from '@/components/PageHead';
import gql from 'graphql-tag';
import { useHandoffListQuery } from '@/generated/graphql';
import { HandoffCourse } from './HandoffCourse';

gql`
  query handoffList {
    course(order_by: { created_at: desc }) {
      ...HandoffCourse
    }
  }

  fragment HandoffCourse on course {
    can_student_see_feedback
    can_student_see_grade
    created_at
    name
    years
    id
    practice_to_courses(order_by: { close_date: desc }) {
      practice {
        title
        created_at
        id
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

export const HandOffIndex: React.FC = () => {
  const [{ data }] = useHandoffListQuery({
    requestPolicy: 'network-only',
  });

  return (
    <>
      <PageHead>Handoff</PageHead>
      <div className="space-y-8 mt-4">
        {data?.course.map((item) => (
          <HandoffCourse course={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default HandOffIndex;

/*
        {(data?.course[0]?.practice_to_course ?? []).map((value) => {
          const close = new Date(value.close_date);
          const open = new Date(value.open_date);
          const isStarted =
            isAfter(currDate, open) && isBefore(currDate, close);
          const isSubmited = value.practice_to_students.length > 0;
          return (
            <CardBox
              key={value.id}
              onClick={
                isStarted && !isSubmited
                  ? () => {
                      navigate(`./${value.id}`);
                    }
                  : undefined
              }
            >
              <div className="flex justify-between">
                <div className="text-xl mb-4">
                  <span className="font-bold">{value.practice.title}</span>{' '}
                  <span>{value.course.name}</span>{' '}
                  <span>{value.course.years}</span>
                </div>
                <div>
                  <Chip variant={isSubmited ? 'success' : 'error'}>
                    {isSubmited ? 'Submited' : 'Not submited'}
                  </Chip>
                </div>
              </div>
              <div>
                <FormatDates close={close} open={open} />
              </div>
              {!isSubmited && (
                <div className="flex justify-between mt-4">
                  <FormatTimeLeft close={close} open={open} />

                  <Chip variant={isStarted ? 'success' : 'error'}>
                    {isStarted ? 'Open' : 'Closed'}
                  </Chip>
                </div>
              )}
            </CardBox>
          );
        })}
 */

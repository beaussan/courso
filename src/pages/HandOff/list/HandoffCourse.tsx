import { HandoffCourseFragment } from '@/generated/graphql';
import React from 'react';
import { isAfter, isBefore } from 'date-fns';
import { CardBox } from '@/components/CardBox';
import { Chip } from '@/components/Chip';
import { FormatTimeLeft } from './FormatTimeLeft';
import { FormatDates } from './FormatDates';
import { Button } from '@/components/Button';
import { useNavigate } from 'react-router';

type PracticeHandoff = HandoffCourseFragment['practice_to_courses'][0];

const PracticeHandoff = ({ practice }: { practice: PracticeHandoff }) => {
  const navigate = useNavigate();
  const currDate = new Date();
  const close = new Date(practice.close_date);
  const open = new Date(practice.open_date);
  const isStarted = isAfter(currDate, open) && isBefore(currDate, close);
  const isSubmited = practice.practice_to_students.length > 0;
  const isOver = isAfter(currDate, close);
  /*

      onClick={
        isStarted && !isSubmited
          ? () => {
              navigate(`./${practice.id}`);
            }
          : undefined
      }
 */
  return (
    <CardBox>
      <div className="flex justify-between">
        <div className="text-xl mb-4">
          <span className="font-bold mr-2">{practice.practice.title}</span>
          <Chip variant={isStarted ? 'success' : 'error'}>
            {isStarted ? 'Open' : 'Closed'}
          </Chip>
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
      {!isSubmited && !isOver ? (
        <div className="flex justify-between items-center mt-4">
          <FormatTimeLeft close={close} open={open} />
          <Button
            onClick={() => {
              navigate(`./${practice.id}`);
            }}
          >
            Submit
          </Button>
        </div>
      ) : null}
    </CardBox>
  );
};

export const HandoffCourse = ({
  course,
}: {
  course: HandoffCourseFragment;
}) => {
  return (
    <div>
      <div className="pb-2 border-b border-gray-300">
        <h3 className="text-lg leading-6 font-semibold text-gray-900">
          {course.name} - {course.years}
        </h3>
      </div>
      <div className="mt-2 grid grid-cols-2  gap-4">
        {course.practice_to_courses.map((practice) => (
          <PracticeHandoff practice={practice} key={practice.id} />
        ))}
      </div>
    </div>
  );
};

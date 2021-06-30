import { HandoffCourseFragment } from '@/generated/graphql';
import React from 'react';
import { isAfter, isBefore } from 'date-fns';
import { CardBox } from '@/components/CardBox';
import { Chip } from '@/components/Chip';
import { Button } from '@/components/Button';
import { routes } from '@/routGetters';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { FormatTimeLeft } from '@/cmpToSort/FormatTimeLeft';
import Link from 'next/link';

type PracticeHandoff = HandoffCourseFragment['practice_to_courses'][0];

const usePracticeInfo = (practice: PracticeHandoff) => {
  const currDate = new Date();
  const close = new Date(practice.close_date);
  const open = new Date(practice.open_date);
  const isBeforeStart = isBefore(currDate, open);
  const isStarted = isAfter(currDate, open) && isBefore(currDate, close);
  const isSubmitted = practice.practice_to_students.length > 0;
  const isOver = isAfter(currDate, close);
  return {
    currDate,
    close,
    open,
    isBeforeStart,
    isSubmitted,
    isStarted,
    isOver,
  };
};

const PracticeHandoffRightSide = ({
  practice,
}: {
  practice: PracticeHandoff;
}) => {
  const { isSubmitted, isOver, isStarted, close, open } = usePracticeInfo(
    practice,
  );
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center ">
        <Chip variant="success">Submitted</Chip>
      </div>
    );
  }
  if (isOver) {
    return (
      <div className="flex justify-center items-center">
        <Chip variant="error">Not submitted</Chip>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-stretch	md:items-center">
      <FormatTimeLeft close={close} open={open} />
      <Link href={routes.handoffId({ handoffId: practice.id })} passHref>
        <Button disabled={!isStarted} as="a">
          Submit
        </Button>
      </Link>
    </div>
  );
};

const PracticeHandoff = ({ practice }: { practice: PracticeHandoff }) => {
  const { isBeforeStart, isStarted, close, open } = usePracticeInfo(practice);
  return (
    <CardBox>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
        <div className="flex justify-between flex-col ">
          <div className="text-xl mb-4 space-x-2 flex items-center">
            <Chip
              variant={isStarted ? 'success' : isBeforeStart ? 'info' : 'error'}
            >
              {isStarted ? 'Open' : isBeforeStart ? 'Coming soon' : 'Closed'}
            </Chip>
            <span className="font-bold">{practice.practice.title}</span>
          </div>
          <div className="text-gray-500">
            {isBeforeStart
              ? `Open at ${format(open, 'Pp', { locale: enGB })}`
              : isStarted
              ? `Closes at ${format(close, 'Pp', { locale: enGB })}`
              : `Closed at ${format(close, 'Pp', { locale: enGB })}`}
          </div>
        </div>
        <PracticeHandoffRightSide practice={practice} />
      </div>
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
        <h3 className="text-lg leading-6 text-gray-900">
          {course.name} - {course.years}
        </h3>
      </div>
      <div className="mt-2 grid grid-cols-1  gap-4">
        {course.practice_to_courses.map((practice) => (
          <PracticeHandoff practice={practice} key={practice.id} />
        ))}
      </div>
    </div>
  );
};

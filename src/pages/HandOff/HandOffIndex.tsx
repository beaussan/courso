import React from 'react';
import { PageHead } from '../../components/PageHead';
import gql from 'graphql-tag';
import { Maybe, useHandoffListQuery } from '../../generated/graphql';
import { CardBox } from '../../components/CardBox';
import { Loader } from '../../components/Loader';
import { Chip } from '../../components/Chip';
import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  intervalToDuration,
  isAfter,
  isBefore,
  max,
} from 'date-fns';
import { useTimeInterval } from '../../hooks/useTimeInterval';
import { enGB } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

gql`
  query handoffList {
    practice_to_course(order_by: { close_date: desc }) {
      practice {
        title
        created_at
        id
      }
      course {
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

interface isOpenable {
  is_open?: Maybe<boolean>;
}

const sortToIsOpenFirst = <T extends isOpenable>(arr: T[]): T[] => {
  return arr.sort((a, b) => {
    if (a.is_open) {
      return -1;
    }
    if (b.is_open) {
      return 1;
    }
    return 0;
  });
};

const FormatSingleDate: React.FC<{ date: Date; prefix: string }> = ({
  date,
  prefix,
}) => {
  return (
    <div>
      {`${prefix} `}
      <span className="font-semibold">
        {formatDistanceToNowStrict(date, {
          addSuffix: true,
          locale: enGB,
        })}
      </span>
      <span>{' at '}</span>
      <span className="font-semibold">
        {format(date, 'Pp', { locale: enGB })}
      </span>
    </div>
  );
};

const FormatDates: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  return (
    <div className="flex justify-between">
      <FormatSingleDate date={open} prefix="Open" />
      <FormatSingleDate date={close} prefix="Closes" />
    </div>
  );
};

const FormatTimeLeft: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  useTimeInterval(1);
  const currDate = new Date();
  const isStarted = isAfter(currDate, open) && isBefore(currDate, close);

  if (isStarted) {
    const timeLeft = formatDuration(
      intervalToDuration({
        start: max([new Date(), open]),
        end: close,
      }),
      { locale: enGB },
    );
    return (
      <div>
        You have <span className="font-semibold">{timeLeft}</span> left
      </div>
    );
  }
  const totalTime = formatDuration(
    intervalToDuration({
      start: open,
      end: close,
    }),
  );
  return (
    <div>
      You will have <span className="font-semibold">{totalTime}</span> in total
    </div>
  );
};

export const HandOffIndex: React.FC = () => {
  const currDate = new Date();
  const navigate = useNavigate();
  const [{ data, error }] = useHandoffListQuery();

  const sortedData = sortToIsOpenFirst(data?.practice_to_course ?? []);
  return (
    <>
      <PageHead>Handoff</PageHead>
      <div className="space-y-8 mt-4">
        {sortedData.map((value) => {
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
      </div>
    </>
  );
};

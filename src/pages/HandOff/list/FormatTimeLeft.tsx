import React from 'react';
import { useTimeInterval } from '@hooks/useTimeInterval';
import {
  formatDuration,
  intervalToDuration,
  isAfter,
  isBefore,
  max,
} from 'date-fns';
import { enGB } from 'date-fns/locale';

export const FormatTimeLeft: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  useTimeInterval(1);
  const currDate = new Date();
  const isStarted = isAfter(currDate, open) && isBefore(currDate, close);

  if (isStarted) {
    const intervalLeft = intervalToDuration({
      start: max([new Date(), open]),
      end: close,
    });
    const format =
      (intervalLeft?.weeks ?? 0) > 0 ||
      (intervalLeft?.months ?? 0) > 0 ||
      (intervalLeft?.years ?? 0) > 0
        ? ['years', 'months', 'weeks', 'days', 'hours']
        : ['days', 'hours', 'minutes', 'seconds'];
    const timeLeft = formatDuration(intervalLeft, {
      locale: enGB,
      format: format,
    });

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

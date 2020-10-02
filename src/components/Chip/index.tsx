import React from 'react';
import clsx from 'clsx';

export type ChipTypes = 'success' | 'error';

export const Chip: React.FC<{ variant: ChipTypes }> = ({
  children,
  variant,
}) => {
  const classes = clsx(
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5',
    {
      'text-green-800 bg-green-100': variant === 'success',
      'text-red-800 bg-red-100': variant === 'error',
    },
  );
  return <span className={classes}>{children}</span>;
};

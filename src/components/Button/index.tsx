import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'warn';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  Icon?: React.ElementType;
  isFull?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  Icon,
  className,
  isFull,
  ...rest
}) => {
  const variants = {
    primary:
      'text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 ',
    secondary:
      'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200',
    ghost:
      'text-black bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-100 border border-1 border-gray-200',
    warn:
      'text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 ',
  };
  const defaultStyle =
    'whitespace-no-wrap inline-flex items-center border border-transparent leading-6 rounded-lg focus:outline-none px-4 py-2 text-base font-medium font-sans cursor-pointer leading-normal align-middle justify-center items-center min-h-10 transition transition-all ease-in-out duration-400';

  let classes = clsx(
    defaultStyle,
    variants[variant],
    {
      'opacity-50 pointer-events-none': disabled,
      'flex-1': isFull,
    },
    className,
  );

  return (
    <div className="inline-flex items-center justify-center">
      <button className={classes} disabled={disabled} {...rest}>
        {Icon && (
          <Icon
            className={clsx('h-5 w-5', { 'mr-2': !!children })}
            aria-hidden="true"
            focusable="false"
          />
        )}
        {children}
      </button>
    </div>
  );
};

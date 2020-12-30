import React from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as Back } from '../../icons/solid/arrow-narrow-left.svg';

export const BackButton: React.FC<{ className: string; backTo?: string }> = ({
  className,
  backTo = '..',
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(backTo)}
      className={`inline-flex items-center cursor-pointer text-gray-500 hover:text-gray-700 focus:text-gray-700 px-2 py-2 ${className}`}
    >
      <Back className="w-6" />
      <span className="sr-only">back</span>
    </button>
  );
};

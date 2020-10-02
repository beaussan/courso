import React from 'react';
import { ReactComponent as Exclamation } from '../../icons/outline/exclamation.svg';

export const Alert: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <Exclamation className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-yellow-800">
            {title}
          </h3>
          <div className="mt-2 text-sm leading-5 text-yellow-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

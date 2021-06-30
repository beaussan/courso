import { DecoratorFn } from '@storybook/react';
import React from 'react';

export const fullScreenBody: DecoratorFn = (fn) => (
  <div className="bg-gray-100">
    <div className=" max-w-7xl mx-auto p-4 sm:px-6 md:px-8">{fn()}</div>
  </div>
);

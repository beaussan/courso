import React from 'react';

export function Error500(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-purple-800 text-white font-bold rounded-lg border shadow-lg p-4">
        Error 500 : Something went wrong !
      </div>
    </div>
  );
}

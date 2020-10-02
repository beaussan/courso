import React from 'react';
import { Loader } from '../components/Loader';

export const LoadingFullScreen: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-50 bg-gray-50 flex items-center justify-center h-screen w-screen">
      <Loader visible={true} height={100} width={100} />
    </div>
  );
};

import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoaderLib from 'react-loader-spinner';

interface LoaderPropsCustom {
  height?: number;
  radius?: number;
  visible?: boolean | string;
  width?: number;
}

export const Loader: React.FC<LoaderPropsCustom> = ({
  visible,
  children,
  ...props
}) => {
  if (!visible) {
    return <>{children}</>;
  }
  return (
    <div className="flex items-center justify-center my-12 h-full">
      <LoaderLib
        type="Triangle"
        color="#42389d"
        width={70}
        height={70}
        visible={visible}
        {...props}
      />
    </div>
  );
};

import React from 'react';
import './loader.css';

// Inspired from react-loader-spinner triangle spinner
interface LoaderPropsCustom {
  height?: number;
  radius?: number;
  visible?: boolean | string;
  width?: number;
  label?: string;
}

const Triangle = (props: LoaderPropsCustom) => (
  <div className="react-spinner-loader-svg  text-indigo-500">
    <svg
      width={props.width}
      height={props.height}
      viewBox="-3 -4 39 39"
      aria-label={props.label}
    >
      <path
        className="text-teal-500"
        fill="transparent"
        strokeWidth="1"
        stroke="currentColor"
        d="M 16,0 32,32 0,32z"
      />
      <path
        className="text-pink-500"
        fill="transparent"
        strokeWidth="1"
        stroke="currentColor"
        d="M 32,32 0,32 16,0z"
      />
      <path
        className="text-indigo-500"
        fill="transparent"
        strokeWidth="1"
        stroke="currentColor"
        d="M 0,32 16,0 32,32z"
      />
    </svg>
  </div>
);

export const Loader: React.FC<LoaderPropsCustom> = ({
  visible,
  children,
  ...props
}) => {
  if (!visible) {
    return <>{children}</>;
  }
  return (
    <div
      aria-busy="true"
      className="flex items-center justify-center my-12 h-full"
    >
      <Triangle width={70} height={70} visible={visible} {...props} />
    </div>
  );
};

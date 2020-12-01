import React from 'react';

export const DebugJson: React.FC<{ json: any }> = ({ json }) => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return (
    <details>
      <summary>Debug data</summary>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </details>
  );
};

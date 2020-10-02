import React from 'react';

export const DebugJson: React.FC<{ json: any }> = ({ json }) => (
  <details>
    <summary>Debug data</summary>
    <pre>{JSON.stringify(json, null, 2)}</pre>
  </details>
);

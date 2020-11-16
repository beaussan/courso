import React from 'react';
import { DropList } from '../DropList';
import { languages } from '../CodeInput/aceSharedConfig';

export const CodeLangField: React.FC<{ name: string; label?: string }> = ({
  name,
  label,
}) => {
  return (
    <DropList
      label={label ?? 'Code language'}
      name={name}
      values={(languages as unknown) as string[]}
    />
  );
};

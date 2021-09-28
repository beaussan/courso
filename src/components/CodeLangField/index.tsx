import React from 'react';
import { DropList } from '@/components/DropList';
import { supportedAceLang } from '@/components/CodeInput/supportedLangs';

export const CodeLangField: React.FC<{ name: string; label?: string }> = ({
  name,
  label,
}) => {
  return (
    <DropList
      label={label ?? 'Code language'}
      name={name}
      values={(supportedAceLang as unknown) as string[]}
    />
  );
};

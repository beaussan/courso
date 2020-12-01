import React, { lazy, Suspense } from 'react';
import { Loader } from '../Loader';
import { SupportedLanguages } from './supportedLangs';
const CodeInputField = lazy(() => import('./index'));

export interface CodeInputFieldLazyProps {
  lang: SupportedLanguages;
  name: string;
  label: string;
  isReadonly?: boolean;
}
export const CodeInputFieldLazy: React.FC<CodeInputFieldLazyProps> = (
  props,
) => {
  return (
    <Suspense fallback={<Loader />}>
      <CodeInputField {...props} />
    </Suspense>
  );
};

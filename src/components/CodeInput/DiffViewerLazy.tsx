import React, { lazy, Suspense } from 'react';
import { Loader } from '../Loader';
import { SupportedLanguages } from './supportedLangs';
const CodeInputField = lazy(() => import('./DiffViewer'));

export interface CodeInputFieldLazyProps {
  lang: SupportedLanguages;
  expected?: string;
  got?: string;
  className?: string;
}
export const DiffViewerLazy: React.FC<CodeInputFieldLazyProps> = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <CodeInputField {...props} />
    </Suspense>
  );
};

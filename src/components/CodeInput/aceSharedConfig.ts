import '../../fonts/monoid/monoid.css';

import 'react-ace';
import { AceEditorProps } from 'react-ace/types';

export const languages = [
  'javascript',
  'java',
  'xml',
  'yaml',
  'typescript',
  'css',
  'sass',
  'json',
  'html',
  'kotlin',
  'text',
  'sh',
  'dockerfile',
  // 'java',
  // 'python',
  //  'ruby',
  //  'sass',
  //  'markdown',
  //  'mysql',
  //  'handlebars',
  //  'golang',
  //  'csharp',
  //  'elixir',
] as const;
export type SupportedLanguages = typeof languages;

export const themes = ['twilight'];

languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach((theme) => {
  require(`ace-builds/src-noconflict/theme-${theme}`);
});

const aceSharedProps: Partial<AceEditorProps> = {
  theme: 'twilight',
  setOptions: {
    fontFamily: 'Monoid',
    useWorker: false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 2,
  },
};

export const makeAceProps: (
  props: Partial<AceEditorProps>,
) => AceEditorProps = (props) => {
  return {
    ...aceSharedProps,
    ...props,
    setOptions: {
      ...aceSharedProps.setOptions,
      ...props.setOptions,
    },
  };
};

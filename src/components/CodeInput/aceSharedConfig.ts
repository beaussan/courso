import '../../fonts/monoid/monoid.css';

import 'react-ace';
import { IAceEditorProps } from 'react-ace';

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

export const themes = ['dracula'];

languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach((theme) => {
  require(`ace-builds/src-noconflict/theme-${theme}`);
});

const aceSharedProps: IAceEditorProps = {
  theme: themes[0],
  width: 'w-full',
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

export const makeAceProps: (props: IAceEditorProps) => IAceEditorProps = (
  props,
) => {
  return {
    ...aceSharedProps,
    ...props,
    setOptions: {
      ...aceSharedProps.setOptions,
      ...props.setOptions,
    },
  };
};

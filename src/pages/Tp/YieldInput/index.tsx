import { Input, TextArea } from '../../../components/Input';
import { DropList } from '../../../components/DropList';
import { Button } from '../../../components/Button';
import { ReactComponent as Remove } from '../../../icons/outline/minus.svg';
import React from 'react';
import { useFormikContext } from 'formik';

const allowedLanguages = [
  'dockerfile',
  'yaml',
  'typescript',
  'tsx',
  'sh',
  'text',
];

const CodeSpecificInputs: React.FC<{ baseName: string }> = ({ baseName }) => {
  return (
    <div>
      <DropList
        label="Kind of code"
        name={`${baseName}.codeMethod`}
        values={allowedLanguages}
      />
    </div>
  );
};

const extraInupts: { [key: string]: React.FC<{ baseName: string }> } = {
  CODE: CodeSpecificInputs,
};

export const YieldInput: React.FC<{
  baseName: string;
  yieldTypes: string[];
  remove?: Function;
}> = ({ yieldTypes, baseName, remove }) => {
  const { getFieldProps } = useFormikContext<any>();
  const { value } = getFieldProps(`${baseName}.method`);

  console.log(value);

  const Extra = extraInupts[value];

  return (
    <div className="flex flex-col justify-between items-start mb-5 space-y-4">
      <div className="flex justify-between w-full">
        <div className="flex-1">
          <Input label="Name" type="text" name={`${baseName}.name`} />
        </div>
        <div className="w-40 mx-4">
          <DropList
            label="Kind of yield"
            name={`${baseName}.method`}
            values={yieldTypes}
          />
        </div>
        {remove && (
          <Button
            className="self-start"
            onClick={() => remove()}
            Icon={Remove}
            variant="ghost"
          />
        )}
      </div>

      <div className="flex-1 w-full">
        <TextArea
          label="Description (markdown allowed)"
          className=""
          type="text"
          name={`${baseName}.description`}
        />
      </div>
      <div>{Extra && <Extra baseName={baseName} />}</div>
    </div>
  );
};

import { Input } from '../../../components/Input';
import { DropList } from '../../../components/DropList';
import { Button } from '../../../components/Button';
import { ReactComponent as Remove } from '../../../icons/outline/minus.svg';
import React from 'react';

export const YieldInput: React.FC<{
  baseName: string;
  yieldTypes: string[];
  remove?: Function;
}> = ({ yieldTypes, baseName, remove }) => {
  return (
    <div className="flex justify-between items-start space-x-10 mb-5">
      <div className="flex-1">
        <Input label="Name" type="text" name={`${baseName}.name`} />
      </div>
      <div className="flex-1">
        <Input
          label="Description"
          type="text"
          name={`${baseName}.description`}
        />
      </div>
      <div className="w-40">
        <DropList
          label="Kind of yield"
          name={`${baseName}.method`}
          values={yieldTypes}
        />
      </div>
      {remove && (
        <Button onClick={() => remove()} Icon={Remove} variant="ghost" />
      )}
    </div>
  );
};

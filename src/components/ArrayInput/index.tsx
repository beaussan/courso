import { useFormikFieldValue } from '../../hooks/useFormikFieldValue';
import { FieldArray } from 'formik';
import React from 'react';
import { Button } from '../Button';
import { ReactComponent as Add } from '../../icons/outline/plus.svg';
import { ReactComponent as Remove } from '../../icons/outline/minus.svg';

interface TArrayInput<T> {
  children: (
    name: string,
    removeSelf: () => void,
    t: T,
    index: number,
    array: T[],
  ) => React.ReactNode;
  name: string;
  labelAdd: string;
  label: string;
  defaultNewItem: () => T;
}

export const ArrayInput = <T extends unknown>({
  children,
  name,
  labelAdd,
  label,
  defaultNewItem,
}: TArrayInput<T>) => {
  const value = useFormikFieldValue<T[]>(name);
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => {
        return (
          <div className="space-y-4">
            <div className="flex content-between font-bold justify-between items-center">
              <div className="text-xl font-bold">{label}</div>

              <Button
                onClick={() => {
                  arrayHelpers.push(defaultNewItem());
                }}
                Icon={Add}
                type="button"
                variant="secondary"
              >
                {labelAdd}
              </Button>
            </div>
            {(value || []).map((data, idx, array) =>
              children(
                `${name}.${idx}`,
                () => arrayHelpers.remove(idx),
                data,
                idx,
                array,
              ),
            )}
          </div>
        );
      }}
    />
  );
};

ArrayInput.RemoveIcon = Remove;
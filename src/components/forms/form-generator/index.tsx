import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Props = {
  type: 'text' | 'email' | 'password';
  inputType: 'select' | 'input' | 'textarea';
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
  defaultValue?: string;
};

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
}: Props) => {
  switch (inputType) {
    case 'input':
    default:
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2 text-sm">{message === 'Required' ? '' : message}</p>
            )}
          />
        </Label>
      );
  }
};

export default FormGenerator;

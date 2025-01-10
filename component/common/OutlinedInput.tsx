'use client';

import { Field, ErrorMessage } from 'formik';
import React from 'react';

interface OutlinedInputProps {
  name: string;
  type?: string;
  placeholder: string;
  as?: 'input' | 'textarea'; 
  rows?: number; 
  error?: string;
  touched?: boolean;
  label?: string
}

const OutlinedInput: React.FC<OutlinedInputProps> = ({
  name,
  type = 'text',
  placeholder,
  as = 'input',
  rows,
  error,
  touched,
}) => {
  return (
    <div className='relative'>
      <Field
        name={name}
        type={type}
        as={as}
        placeholder={placeholder}
        rows={as === 'textarea' ? rows : undefined}
        className={`text-custom-black placeholder:text-custom-green w-full bg-white p-5 text-base placeholder:text-base focus:outline-none ${
          touched && error ? 'border border-red-500' : ''
        } ${as === 'textarea' ? 'resize-y-none rounded-lg' : 'rounded-md'}`}
      />
      <ErrorMessage
        name={name}
        component='span'
        className='mt-1 inline-block text-xs text-red-500'
      />
    </div>
  );
};

export default OutlinedInput;

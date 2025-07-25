import React from 'react';

interface Props {
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  error?: string;
}

export default function FormInput({
  label,
  name,
  onChange,
  onBlur,
  type = 'text',
  error,
  value = '',
}: Props) {
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder=" "
          className={
            `peer w-full px-4 pt-4 pb-2 border border-gray-300 rounded-md ` +
            `focus:outline-none focus:border-indigo-600`
          }
        />

        <label
          htmlFor={name}
          className={`absolute left-4 px-1 bg-white transition-all duration-200 pointer-events-none
           /* centered when empty/unfocused */
           peer-placeholder-shown:top-1/2
           peer-placeholder-shown:-translate-y-1/2
           peer-placeholder-shown:text-gray-400
           peer-placeholder-shown:text-base
           ${error ? 'peer-placeholder-shown:-top-10' : ''}    
           /* floated when focused or with value */
           peer-focus:-top-2
           peer-focus:translate-y-0
           peer-focus:text-xs
           peer-focus:text-indigo-600
           ${value ? '-top-2 translate-y-0 peer-focus:text-xs' : ''}           
       
           `}
        >
          {label}
        </label>
      </div>
      {error && <div className="text-red-500 mt=1 text-sm">{error}</div>}
    </div>
  );
}

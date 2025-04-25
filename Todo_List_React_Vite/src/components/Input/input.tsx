import React from 'react';

type InputProps =  React.HTMLProps<HTMLInputElement>

const Input: React.FC<InputProps> = ({ placeholder, type = 'text', value, onChange, ...props }) => {
  return (
    <input
      className='w-full h-auto px-4 py-3 transition-all duration-300 ease-in-out border border-gray-300 rounded-lg shadow-sm outline-none text-gray-950 bg-gray-50 focus:bg-white focus:border-blue-500 placeholder:text-zinc-500' // focus:shadow-md focus:shadow-blue-500
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
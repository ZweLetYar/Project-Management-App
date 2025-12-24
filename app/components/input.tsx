import React from "react";

function input({
  placeholder,
  label,
  type,
  text,
  ...props
}: {
  placeholder?: string;
  label?: string;
  type: string;
  text?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      {label && <label htmlFor="">{label}</label>}
      <input
        {...props}
        type={type}
        name=""
        id=""
        className="border-b-1 border-b-cyan-800 block w-full py-2 mb-2 placeholder:text-gray-600 px-4  focus:outline-none focus:border-gray-600 focus:placeholder-transparent "
        placeholder={placeholder}
      />
      {text && <p className="text-gray-400 mb-2 text-xs mt-0">{text}</p>}
    </>
  );
}

export default input;

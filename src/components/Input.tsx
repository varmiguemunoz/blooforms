import React, { FC } from "react";

/* eslint-disable no-unused-vars, no-undef*/
type InputProps = {
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
  iconFunction?: () => void;
  id?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  size?: "full" | "auto";
  value?: string;
  readonly?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  pattern?: string;
};

enum InputSize {
  full = "w-full",
  auto = "w-auto",
}

const Input: FC<InputProps> = ({
  defaultValue,
  icon,
  iconPosition,
  iconFunction,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  label,
  placeholder,
  type = "text",
  value,
  readonly = false,
  required = false,
  isDisabled,
  size = "auto",
  pattern,
}) => {
  return (
    <div className={` ${InputSize[size]} flex flex-col gap-2`}>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm text-black font-semibold ${
            required
              ? 'after:content-["*"] after:text-red-400 after:ml-0.5'
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative`}>
        {icon && iconPosition === "left" && (
          <span
            className={`absolute inset-y-0 left-0 flex items-center pl-[10px] text-2xl text-darkGray ${
              iconFunction && "cursor-pointer"
            }`}
            onClick={iconFunction}
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          pattern={pattern}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={type}
          value={value}
          readOnly={readonly}
          required={required}
          className={`w-full py-2 transition-all
        ${
          iconPosition === "left" ? "pl-9" : "pl-3"
        } pr-[10px] leading-[21px] text-black placeholder:text-darkGray border-darkGray bg-white border rounded-[6px] focus:border-purple-400  focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-30`}
          disabled={isDisabled}
        />
        {icon && iconPosition === "right" && (
          <span
            className={`absolute inset-y-0 right-0 pr-3 flex items-center pl-[10px] text-2xl text-darkGray ${
              iconFunction && "cursor-pointer"
            }`}
            onClick={iconFunction}
          >
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;

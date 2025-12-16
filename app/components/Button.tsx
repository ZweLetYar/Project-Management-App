import React, { ReactNode } from "react";

function Button({
  icon,
  children,
  variant,
  color,
  ...props
}: {
  icon?: ReactNode;
  children?: ReactNode;
  variant?: "normal" | "outline";
  color?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={` ${
        props.className || "w-full"
      } py-3 px-2 rounded-lg  cursor-pointer hover:bg-[#77a8a8] ${
        icon ? "flex items-center justify-center space-x-3" : ""
      } ${variant == "normal" ? "bg-[#77a8a8]" : "border border-[#77a8a8]"} ${
        color == "primary"
          ? "bg-[#f7e7ce] hover:border hover:border-[#f7e7ce]"
          : "bg-[#77a8a8] hover:border hover:border-[#77a8a8]"
      }`}
    >
      {icon && icon}
      <p>{children}</p>
    </button>
  );
}

export default Button;

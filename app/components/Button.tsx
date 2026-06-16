import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`
        rounded-md border border-white/20 px-4 py-2
        transition hover:bg-white/10
        aria-pressed:bg-white/20
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

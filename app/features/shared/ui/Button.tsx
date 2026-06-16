import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`
        rounded-md border border-white/20 px-4 py-2
        transition-colors
        hover:bg-white/10
        focus-visible:outline-2
        focus-visible:outline-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    />
  );
};

export default Button;

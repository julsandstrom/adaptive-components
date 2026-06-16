import type { InputHTMLAttributes } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

const FormField = ({
  id,
  label,
  error,
  className = "",
  ...props
}: FormFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="
          min-h-12 w-full rounded-xl
          border border-black/15
          bg-black/5 px-4
          outline-none
          transition-colors
          focus-visible:border-black/50
          focus-visible:ring-2
          focus-visible:ring-black/20
        "
        {...props}
      />

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;

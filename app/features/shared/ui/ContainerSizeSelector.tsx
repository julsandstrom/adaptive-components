"use client";

import { useId } from "react";

export type ContainerSizeOption<T extends string> = {
  value: T;
  label: string;
  description?: string;
};

type ContainerSizeSelectorProps<T extends string> = {
  value: T;
  options: readonly ContainerSizeOption<T>[];
  onChange: (value: T) => void;
  legend?: string;
  name?: string;
};

const ContainerSizeSelector = <T extends string>({
  value,
  options,
  onChange,
  legend = "Preview container width",
  name,
}: ContainerSizeSelectorProps<T>) => {
  const generatedId = useId().replaceAll(":", "");
  const groupName = name ?? `container-size-${generatedId}`;

  return (
    <fieldset className="w-full">
      <legend className="sr-only">{legend}</legend>

      <div className="flex flex-wrap items-center justify-center gap-10 xl:gap-16">
        {options.map((option) => {
          const inputId = `${groupName}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={inputId}
              className="
                flex cursor-pointer flex-col items-center
                rounded-md border border-black/10
                px-4 py-2 text-base
                transition

                hover:bg-black/5

                has-[:checked]:bg-black
                has-[:checked]:text-white

                has-[:focus-visible]:outline
                has-[:focus-visible]:outline-2
                has-[:focus-visible]:outline-offset-2

                xl:px-8 xl:py-3
                xl:text-xl
              "
            >
              <input
                id={inputId}
                type="radio"
                name={groupName}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />

              <span>{option.label}</span>

              {option.description && (
                <span className="text-sm font-light opacity-75">
                  {option.description}
                </span>
              )}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ContainerSizeSelector;

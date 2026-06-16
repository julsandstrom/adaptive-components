import { CARD_SIZE_OPTIONS } from "../model/profile-card.config";
import type { CardSize } from "../model/profile-card.types";

type CardSizeSelectorProps = {
  value: CardSize;
  onChange: (size: CardSize) => void;
};

const CardSizeSelector = ({ value, onChange }: CardSizeSelectorProps) => {
  return (
    <fieldset className="w-full">
      <legend className="sr-only">Preview container width</legend>

      <div className="flex flex-wrap items-center justify-center gap-10 xl:gap-16">
        {CARD_SIZE_OPTIONS.map((option) => {
          const inputId = `card-size-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={inputId}
              className="
                cursor-pointer rounded-md
                border border-black/10
                px-4 py-2
                transition

                hover:bg-white/10
              text-base xl:text-xl xl:px-8 xl:py-3
                has-[:checked]:bg-black
                has-[:checked]:text-white
                has-[:focus-visible]:outline
                has-[:focus-visible]:outline-2
                has-[:focus-visible]:outline-offset-2
              "
            >
              <input
                id={inputId}
                type="radio"
                name="adaptive-card-size"
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />

              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default CardSizeSelector;

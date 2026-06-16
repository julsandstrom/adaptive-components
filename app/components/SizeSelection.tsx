import Button from "./Button";
import type { CardSize } from "./AdaptiveCardDemo";

type SizeSelectionProps = {
  size: CardSize;
  onSizeChange: (size: CardSize) => void;
};

const options: CardSize[] = ["narrow", "medium", "large"];

const labels: Record<CardSize, string> = {
  narrow: "Narrow",
  medium: "Medium",
  large: "Large",
};

const SizeSelection = ({ size, onSizeChange }: SizeSelectionProps) => {
  return (
    <fieldset className="w-full">
      <legend className="sr-only">Preview container width</legend>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        {options.map((option) => (
          <Button
            key={option}
            type="button"
            aria-pressed={size === option}
            onClick={() => onSizeChange(option)}
          >
            {labels[option]}
          </Button>
        ))}
      </div>
    </fieldset>
  );
};

export default SizeSelection;

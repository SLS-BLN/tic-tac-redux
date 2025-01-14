import { ReactNode, useState } from "react";

interface FieldProps {
  disabled: boolean;
  onClick: (id: string) => void;
  value: string | null;
  id: number;
  children: ReactNode;
}

export default function Field({
  disabled,
  onClick,
  value,
  id,
  children,
}: FieldProps) {
  const [isSelected, setIsSelected] = useState(false);

  const buttonId = id.toString();

  function handleClick(id: string) {
    setIsSelected(true);
    onClick(id);
  }

  if (isSelected)
    return (
      <button
        disabled
        className="selected bg-blue-800 text-3xl"
        type="button"
        id={buttonId}
      >
        {value}
      </button>
    );

  return (
    <button
      disabled={disabled}
      onClick={() => handleClick(buttonId)}
      id={buttonId}
      type="button"
      className="text-3xl"
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export default function Button({ onClick, text }: ButtonProps) {
  function handleClick() {
    onClick();
  }

  return (
    <button className="self-center" onClick={handleClick}>
      {text}
    </button>
  );
}

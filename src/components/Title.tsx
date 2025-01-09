interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="mb-7 justify-between text-4xl font-extrabold text-slate-100">
      {text}
    </h1>
  );
}

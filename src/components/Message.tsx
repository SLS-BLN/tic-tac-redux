import { ReactNode } from "react";

interface MessageProps {
  title: string;
  text?: string;
  winner?: string;
  children: ReactNode;
}

export default function Message({
  title,
  text,
  winner = "",
  children,
}: MessageProps) {
  return (
    <dialog
      open
      className="m flex w-72 flex-col content-center justify-evenly px-5 py-5"
    >
      <h2 className="mb-6 text-3xl font-extrabold text-slate-100">
        {title}
        {winner && `, ${winner}`}!
      </h2>
      <p>{text}</p>
      {children}
    </dialog>
  );
}

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
    // non-modal dialog is sufficient in this App
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

/*
HTML non-modal element

more info:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

modal dialog requires in React the usage of useEffect and useRef
https://dev.to/elsyng/react-modal-dialog-using-html-dialog-element-5afk
https://www.youtube.com/watch?v=YwHJMlvZRCc
*/

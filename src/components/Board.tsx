import { ReactNode } from "react";

interface BoardProps {
  children: ReactNode;
}

export default function Board({ children }: BoardProps) {
  return (
    <section className="mb-12 grid grid-cols-layout grid-rows-layout justify-center gap-2">
      {children}
    </section>
  );
}

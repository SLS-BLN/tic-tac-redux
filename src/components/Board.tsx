import { ReactNode } from "react";

interface BoardProps {
  children: ReactNode;
}

export default function Board({ children }: BoardProps) {
  return (
    <section className="grid-rows-layout grid-cols-layout mb-12 grid justify-center gap-2">
      {children}
    </section>
  );
  //   <section className="mb-12 grid grid-cols-3 grid-rows-3 gap-2">
  //     {children}
  //   </section>
  // );
}

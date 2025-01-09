import { ReactNode } from "react";

interface PlayerListProps {
  children: ReactNode;
}

// TODO: test ul instead of ol - why choose which one?
export default function PlayerList({ children }: PlayerListProps) {
  return (
    <ol className="list mb-7 flex flex-col justify-between">{children}</ol>
  );
}

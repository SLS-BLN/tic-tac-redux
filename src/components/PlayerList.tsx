import { ReactNode } from "react";

interface PlayerListProps {
  children: ReactNode;
}

export default function PlayerList({ children }: PlayerListProps) {
  return (
    <ul className="list mb-7 flex flex-col justify-between">{children}</ul>
  );
}

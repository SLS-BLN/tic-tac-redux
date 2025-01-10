import { ChangeEvent, FormEvent, useState } from "react";
import { setName } from "./gameSlice";
import { useAppDispatch } from "../hooks";

interface PlayerProps {
  initialName: string;
  symbol: "X" | "O";
  isActive: boolean;
}

export default function Player({ initialName, symbol, isActive }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(setName([symbol, playerName]));
    setIsEditing(false);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPlayerName(value);
  }

  function handleEditClick() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  return (
    <li
    // className={`grid grid-cols-3 grid-rows-1 place-items-center gap-2 py-3 ${isActive ? "active" : ""}`}
    >
      {!isEditing && (
        <section
          className={`grid grid-cols-3 grid-rows-1 place-items-center gap-2 py-3 ${isActive ? "active" : ""}`}
        >
          <p className="font-semibold text-slate-100">{playerName}</p>
          <p className="text-3xl text-slate-100">{symbol}</p>
          <button
            className="px-3 py-1 text-lg"
            onClick={handleEditClick}
            type="button"
          >
            Edit
          </button>
        </section>
      )}
      {isEditing && (
        <section
          className={`grid grid-cols-3 grid-rows-1 place-items-center gap-2 py-3 ${isActive ? "active" : ""}`}
        >
          <form
            onSubmit={handleSubmit}
            id="name-submit"
            className="col-span-2 place-self-center"
          >
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder={playerName}
                onChange={handleChange}
                className="rounded border border-slate-400 bg-slate-700 px-1 py-1 text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </label>
          </form>
          <button
            className="px-3 py-1 text-lg"
            type="submit"
            form="name-submit"
          >
            Save
          </button>
        </section>
      )}
    </li>
  );
}

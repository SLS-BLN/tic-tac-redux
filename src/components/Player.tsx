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
    <li className={`list-item ${isActive ? "active" : undefined}`}>
      {!isEditing && <p className="player-name">{playerName}</p>}
      {isEditing && (
        <form onSubmit={handleSubmit} id="name-submit">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              value={playerName}
              onChange={handleChange}
            />
          </label>
        </form>
      )}

      <p>{symbol}</p>
      {isEditing && (
        <button className="edit-btn" type="submit" form="name-submit">
          {isEditing ? "Save" : "Edit"}
        </button>
      )}
      {!isEditing && (
        <button className="edit-btn" onClick={handleEditClick} type="button">
          {isEditing ? "Save" : "Edit"}
        </button>
      )}
    </li>
  );
}

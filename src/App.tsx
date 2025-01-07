import Player from "./components/Player";
import PlayerList from "./components/PlayerList";
import Title from "./components/Title";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RootState } from "./store";

import { setGameActive, selectField, resetBoard } from "./components/gameSlice";

import "./App.css";

import Board from "./components/Board";
import Message from "./components/Message";
import Button from "./components/Button";
import Field from "./components/Field";

const START_SYMBOL = "@";

function App() {
  const players = useAppSelector((state: RootState) => state.game.players);
  const activeSymbol = useAppSelector(
    (state: RootState) => state.game.activeSymbol,
  );
  const isGameOver = useAppSelector(
    (state: RootState) => state.game.isGameOver,
  );
  const winner = useAppSelector((state: RootState) => state.game.winner);
  const isGameActive = useAppSelector(
    (state: RootState) => state.game.isGameActive,
  );
  const history = useAppSelector((state: RootState) => state.game.board);

  const disabled = !isGameActive;
  const dispatch = useAppDispatch();

  function handleSelectClick(id: string) {
    dispatch(selectField(id));
  }

  function handleResetClick() {
    dispatch(resetBoard());
  }

  function handleStartClick() {
    dispatch(setGameActive(true));
  }

  return (
    <>
      <Title text="Tic Tac Toe" />
      <PlayerList>
        <Player
          initialName={players.X}
          symbol="X"
          isActive={!disabled && activeSymbol === "X"}
        />
        <Player
          initialName={players.O}
          symbol="O"
          isActive={!disabled && activeSymbol === "O"}
        />
      </PlayerList>
      <Board>
        {isGameOver && winner !== "" && (
          <Message title="You win" winner={winner}>
            <Button onClick={handleResetClick} text="Reset" />
          </Message>
        )}
        {isGameOver && !isGameActive && winner === "" && (
          <Message title="It's a draw">
            <Button onClick={handleResetClick} text="Try again" />
          </Message>
        )}
        {history.map((value, index) => {
          return (
            // all field components are destroyed when the game is over
            // this is neccessary to reset the isSeleceted state in every field component
            // https://react.dev/learn/preserving-and-resetting-state
            !isGameOver && (
              <Field
                disabled={disabled}
                key={index}
                id={index}
                onClick={handleSelectClick}
                value={value}
              >
                {START_SYMBOL}
              </Field>
            )
          );
        })}
      </Board>
      {!isGameActive && <Button onClick={handleStartClick} text="Start Game" />}
    </>
  );
}

export default App;

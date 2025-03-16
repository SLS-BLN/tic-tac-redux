import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { calculateWinner, checkDraw } from "../utils/winner";

const NUM_FIELDS = 9;
const INITIAL_BOARD = Array(NUM_FIELDS).fill(null);

interface GameState {
  players: {
    X: string;
    O: string;
  };
  board: (string | null)[];
  activeSymbol: "X" | "O";
  isGameActive: boolean;
  isGameOver: boolean;
  winner: string;
}

const initialState: GameState = {
  players: {
    X: "player 1",
    O: "player 2",
  },
  board: INITIAL_BOARD,
  activeSymbol: "X",
  isGameActive: false,
  isGameOver: false,
  winner: "",
};

export const gameSlice = createSlice({
  name: "game",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    switchPlayer: (state) => {
      state.activeSymbol = state.activeSymbol === "X" ? "O" : "X";
    },
    setPlayer: (state, action: PayloadAction<"X" | "O">) => {
      state.activeSymbol = action.payload;
    },
    setName: (state, action: PayloadAction<string[]>) => {
      const [symbol, playerName] = action.payload;

      state.players = {
        ...state.players,
        [symbol]: playerName,
      };
    },
    setGameActive: (state, action: PayloadAction<boolean>) => {
      state.isGameActive = action.payload;
    },
    setGameOver: (state, action: PayloadAction<boolean>) => {
      state.isGameOver = action.payload;
    },
    selectField: (state, action) => {
      if (state.isGameOver) {
        return;
      }

      const index = parseInt(action.payload);
      state.board = state.board.map((item, i) => {
        if (index === i) {
          return state.activeSymbol;
        } else {
          return item;
        }
      });

      const [hasWinner, hasDraw] = checkWinOrDraw(
        state.board,
        state.activeSymbol,
      );

      if (hasWinner) {
        state.winner = getWinner(state.players, state.activeSymbol);
      }

      if (hasWinner || hasDraw === true) {
        state.isGameOver = true;
        state.isGameActive = false;
        return;
      }

      state.activeSymbol = state.activeSymbol === "X" ? "O" : "X";
    },
    resetBoard: (state) => {
      state.isGameActive = true;
      state.isGameOver = false;
      state.activeSymbol = "X";
      state.winner = "";
      state.board = INITIAL_BOARD;
    },
  },
});

export const {
  setPlayer,
  setName,
  switchPlayer,
  setGameActive,
  setGameOver,
  selectField,
  resetBoard,
} = gameSlice.actions;

export default gameSlice.reducer;

function checkWinOrDraw(score: (string | null)[], activeSymbol: string) {
  const hasWinner = calculateWinner(score, activeSymbol);
  const hasDraw = checkDraw(score);
  return [hasWinner, hasDraw];
}

function getWinner(players: { X: string; O: string }, symbol: "X" | "O") {
  return players[symbol];
}

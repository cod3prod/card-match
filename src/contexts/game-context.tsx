"use client";

import React, { createContext, Dispatch, useReducer } from "react";
import { gameReducer, initialState  } from "@/reducers/game-reducer";
import { GameState, GameAction } from "@/types/game-reducer";

type GameContextType = {
  state: GameState;
  dispatch: Dispatch<GameAction>;
};

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
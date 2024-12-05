"use client";

import { useCallback, useContext } from "react";
import { GameContext } from "@/contexts/game-context";
import { initialState } from "@/reducers/game-reducer";

export default function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  const { state, dispatch } = context;

  const handlePlay = useCallback(
    (index: number) => {
      if (!state.gameActive) {
        dispatch({ type: "SET_GAME_ACTIVE", payload: true });
      }

      if (state.squares[index] || !state.canClick) {
        return;
      }

      dispatch({ type: "SET_COUNT_CLICK", payload: state.countClick + 1 });

      const nextSquares = state.squares.slice();
      nextSquares[index] = state.deck[index];
      dispatch({ type: "SET_SQUARES", payload: nextSquares });

      if (state.inHand.card === null) {
        // 첫 번째 카드 선택
        dispatch({
          type: "SET_IN_HAND",
          payload: { card: state.deck[index], index }
        });
        return;
      }

      // 두 번째 카드 선택
      const isMatch = state.inHand.card === state.deck[index];
      
      if (isMatch) {
        // 매치 성공
        dispatch({ type: "SET_IN_HAND", payload: { card: null, index: null } });
        dispatch({ type: "SET_SCORE", payload: state.score + 1 });
        dispatch({
          type: "SET_HISTORY",
          payload: [...state.history, state.inHand.card]
        });
      } else {
        // 매치 실패
        dispatch({ type: "SET_CAN_CLICK", payload: false });
        
        setTimeout(() => {
          const resetSquares = state.squares.slice();
          resetSquares[state.inHand.index!] = null;
          resetSquares[index] = null;
          
          dispatch({ type: "SET_SQUARES", payload: resetSquares });
          dispatch({ type: "SET_IN_HAND", payload: { card: null, index: null } });
          dispatch({ type: "SET_CAN_CLICK", payload: true });
        }, 300);
      }
    },
    [
      state.gameActive,
      state.squares, 
      state.canClick,
      state.countClick,
      state.inHand,
      state.deck,
      state.score,
      state.history,
      dispatch
    ]
  );

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET", payload: initialState });
  }, [dispatch]);

  return { state, handlePlay, handleReset };
}

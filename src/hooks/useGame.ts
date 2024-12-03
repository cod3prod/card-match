"use client";

import { useReducer, useEffect, useCallback } from "react";
import { gameReducer, initialState } from "../reducer/game-reducer";
import { shuffle } from "../utils/shuffle";

export function useGame() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    if (!state.gameActive) {
      const shuffledCards = shuffle(state.deck);
      dispatch({ type: "RESET", payload: initialState });
      dispatch({ type: "SET_DECK", payload: shuffledCards });
    }
  }, [state.gameActive]);

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
      const nextInHand = JSON.parse(JSON.stringify(state.inHand));

      if (state.inHand.card === null) {
        nextSquares[index] = state.deck[index];
        nextInHand.card = state.deck[index];
        nextInHand.index = index;
        dispatch({ type: "SET_SQUARES", payload: nextSquares });
        dispatch({
          type: "SET_IN_HAND",
          payload: { card: nextInHand.card, index: nextInHand.index },
        });
      } else {
        if (state.inHand.card === state.deck[index]) {
          nextSquares[index] = state.deck[index];
          dispatch({ type: "SET_SQUARES", payload: nextSquares });
          dispatch({
            type: "SET_IN_HAND",
            payload: { card: null, index: null },
          });
          dispatch({ type: "SET_SCORE", payload: state.score + 1 });
          dispatch({
            type: "SET_HISTORY",
            payload: [...state.history, state.inHand.card],
          });
        } else {
          nextSquares[index] = state.deck[index];
          dispatch({ type: "SET_SQUARES", payload: nextSquares });
          dispatch({ type: "SET_CAN_CLICK", payload: false });
          setTimeout(() => {
            nextSquares[state.inHand.index!] = null;
            nextSquares[index] = null;
            dispatch({ type: "SET_SQUARES", payload: nextSquares });
            dispatch({
              type: "SET_IN_HAND",
              payload: { card: null, index: null },
            });
            dispatch({ type: "SET_CAN_CLICK", payload: true });
          }, 300);
        }
      }
    },
    [state]
  );

  const handleReset = useCallback(() => {
    dispatch({ type: "SET_GAME_ACTIVE", payload: false });
  }, []);

  return { state, handlePlay, handleReset };
}

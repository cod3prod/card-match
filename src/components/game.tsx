"use client";

import { gameReducer, initaialState } from "@/reducer/game-reducer";
import { shuffle } from "@/utils/shuffle";
import { useEffect, useReducer } from "react";
import Board from "./board";
import Link from "next/link";

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initaialState);

  useEffect(() => {
    if (!state.gameActive) {
      const shuffledCards = shuffle(state.deck);
      dispatch({ type: "RESET", payload: initaialState });
      dispatch({ type: "SET_DECK", payload: shuffledCards });
    }
  }, [state.gameActive]);

  function handlePlay(index: number) {
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
        dispatch({ type: "SET_IN_HAND", payload: { card: null, index: null } });
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
  }

  const logDescription = state.history.map((data, index) => {
    return (
      <div key={index} className="text-info mb-1">
        {`You matched the pair of ${data}.`}
      </div>
    );
  });

  function gameReset() {
    dispatch({ type: "SET_GAME_ACTIVE", payload: false });
  }

  return (
    <div className="grow relative container max-w-xl mx-auto p-4">
      <Board
        squares={state.squares}
        score={state.score}
        onPlay={handlePlay}
        gameReset={gameReset}
      />
      <div className="mt-4 p-4 w-full h-[30vh] bg-secondary rounded-md text-center overflow-auto">
        <div className="mb-1 sm:text-2xl font-bold text-primary animate-pulse">
          {`You have clicked ${state.countClick} times.`}
        </div>
        {logDescription}
      </div>
      <div className="mt-8 animate-bounce flex justify-center">
        <Link href="https://www.github.com/cod3prod">
          <p className="text-center text-xl sm:text-2xl text-bold text-opacity-50 text-secondary hover:text-2xl sm:hover:text-3xl hover:text-opacity-100 hover:text-primary transition-all">
            Created by cod3prod
          </p>
        </Link>
      </div>
    </div>
  );
}

export type GameState = {
  squares: (string | null)[];
  deck: string[];
  inHand: {
    card: string | null;
    index: number | null;
  };
  canClick: boolean;
  countClick: number;
  score: number;
  history: string[];
  gameActive: boolean;
};

export type GameAction =
  | { type: "SET_SQUARES"; payload: (string | null)[] }
  | { type: "SET_DECK"; payload: string[] }
  | {
      type: "SET_IN_HAND";
      payload: { card: string | null; index: number | null };
    }
  | { type: "SET_CAN_CLICK"; payload: boolean }
  | { type: "SET_COUNT_CLICK"; payload: number }
  | { type: "SET_SCORE"; payload: number }
  | { type: "SET_HISTORY"; payload: string[] }
  | { type: "SET_GAME_ACTIVE"; payload: boolean }
  | { type: "RESET"; payload: State };

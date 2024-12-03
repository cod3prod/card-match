export type State = {
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

export const initialState: State = {
  squares: Array(16).fill(null),
  deck: [
    "👀",
    "😜",
    "💋",
    "🎂",
    "🤷‍♂️",
    "🤢",
    "🌹",
    "✔",
    "👀",
    "😜",
    "💋",
    "🎂",
    "🤷‍♂️",
    "🤢",
    "🌹",
    "✔",
  ],
  inHand: {
    card: null,
    index: null,
  },
  canClick: true,
  countClick: 0,
  score: 0,
  history: [],
  gameActive: false,
};

type Action =
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

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SQUARES":
      return { ...state, squares: action.payload };
    case "SET_DECK":
      return { ...state, deck: action.payload };
    case "SET_IN_HAND":
      return { ...state, inHand: action.payload };
    case "SET_CAN_CLICK":
      return { ...state, canClick: action.payload };
    case "SET_COUNT_CLICK":
      return { ...state, countClick: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_HISTORY":
      return { ...state, history: action.payload };
    case "SET_GAME_ACTIVE":
      return { ...state, gameActive: action.payload };
    default:
      return action.payload || state;
  }
};

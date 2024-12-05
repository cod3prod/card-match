import { GameState, GameAction } from "@/types/game-reducer";
import { shuffle } from "@/utils/shuffle";

export const initialState: GameState = {
  squares: Array(16).fill(null),
  deck: shuffle([
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
  ]),
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

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
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

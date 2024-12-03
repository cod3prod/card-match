import { State } from "@/reducer/game-reducer";

export default function ClickCounter({ state }: { state: State }) {
  return (
    <p className="mb-1 sm:text-2xl font-bold text-primary animate-pulse">
      {`You have clicked ${state.countClick} times.`}
    </p>
  );
}

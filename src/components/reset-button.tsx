import { GrPowerReset } from "react-icons/gr";

export default function ResetButton({ onReset }: { onReset: () => void }) {
  return (
    <button
      className="absolute rounded-full bg-button w-10 h-10 text-secondary top-2 right-2"
      onClick={onReset}
    >
      <GrPowerReset className="text-2xl" />
    </button>
  );
}

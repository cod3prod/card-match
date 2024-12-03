import { State } from "@/reducer/game-reducer";
import ClickCounter from "./click-couter";
import DescriptionItem from "./description-item";

export default function GameInfo({ state }: { state: State }) {
  const descriptionList = state.history.map((data, index) => {
    return <DescriptionItem key={index} value={data} />;
  });

  return (
    <section className="mt-4 p-4 w-full h-[30vh] bg-secondary rounded-md text-center overflow-auto custom-scrollbar">
      <ClickCounter state={state} />
      <ul>{descriptionList}</ul>
    </section>
  );
}

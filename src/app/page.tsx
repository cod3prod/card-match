import Footer from "@/components/footer";
import Game from "@/components/game";
import Header from "@/components/header";
import { GameProvider } from "@/contexts/game-context";

export default function Page() {
  return (
    <>
      <Header />
      <GameProvider>
        <Game />
      </GameProvider>
      <Footer />
    </>
  );
}

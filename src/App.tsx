import { useGameState } from './hooks/useGameState';
import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";
import { GameArea } from "./components/GameArea";

function App() {
  const gameState = useGameState();

  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-[1280px] mx-auto px-4 py-8 h-full relative overflow-hidden">
        <Header 
          actionWord={gameState.actionWord} 
          onActionWordSelection={gameState.handleActionWordSelection} 
        />
        
        <ProgressBar percentage={gameState.progressPercentage} />
        
        <GameArea {...gameState} />
      </main>
    </div>
  );
}

export default App;

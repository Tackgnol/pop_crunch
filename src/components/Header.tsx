import { WordBadge } from "./WordBadge";

interface HeaderProps {
  actionWord: string;
  onActionWordSelection: (position: number, suggestion: string) => void;
}

export function Header({ actionWord, onActionWordSelection }: HeaderProps) {
  const actionOptions = [
    { suggestion: "change", correct: true },
    { suggestion: "fix", correct: true },
    { suggestion: "update", correct: true },
    { suggestion: "correct", correct: true }
  ];

  return (
    <div className="text-center mb-2 sm:mb-4">
      <h1 className="bangers-regular text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 text-blue-600">PoP Crunch</h1>
      <div className="text-base sm:text-lg md:text-xl flex flex-wrap justify-center items-center gap-1 nanum-myeongjo-regular text-black">
        <p className="text-black m-0 inline">These statements have mistakes in them, can you spot them all and</p>
        <WordBadge
          text={actionWord}
          options={actionOptions}
          position={0}
          badgeColor="badge-primary"
          onSelect={onActionWordSelection}
        />
        <p className="text-black m-0 inline">them?</p>
      </div>
    </div>
  );
}
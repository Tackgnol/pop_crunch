import { FC } from 'react';

import { StatementWithBadges } from 'components/StatementWithBadges';
import { pointsMap } from 'src/constants.ts';

export interface IFix {
  text: string;
  startPosition: number;
  endPosition?: number;
  groupId?: string;
  options: {
    suggestion: string;
    correct: boolean;
  }[];
}

interface ICardProps {
  text: string;
  statement: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  fixes?: IFix[];
  selectedWords: Record<number, { text: string; endPosition?: number; groupId?: string }>;
  onSelectWord: (
    position: number,
    suggestion: string,
    endPosition?: number,
    groupId?: string
  ) => void;
  isFlashing?: boolean;
}

export const GameCard: FC<ICardProps> = ({
  text,
  statement,
  difficulty = 'medium',
  fixes = [],
  selectedWords,
  onSelectWord,
  isFlashing = false,
}) => {
  // Border colors based on difficulty
  const difficultyStyles = {
    easy: 'border-emerald-300',
    medium: 'border-amber-300',
    hard: 'border-rose-300',
  };

  // Badge colors based on difficulty
  const badgeStyles = {
    easy: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    medium: 'bg-amber-100 text-amber-800 border border-amber-300',
    hard: 'bg-rose-100 text-rose-800 border border-rose-300',
  };

  // Friendly labels for difficulty
  const difficultyLabels = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  };

  const handleWordSelection = (
    position: number,
    suggestion: string,
    endPosition?: number,
    groupId?: string
  ) => {
    onSelectWord(position, suggestion, endPosition, groupId);
  };
  const points = pointsMap[difficulty];
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl sm:rounded-2xl
            shadow-xl p-4 sm:p-6 m-auto border-4 sm:border-8 rotate-[0.042rad]
            bg-white text-black
            ${difficultyStyles[difficulty]}
            ${isFlashing ? 'animate-border-flash' : ''}
            font-sans select-none justify-center relative`}
    >
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
        <div
          className="tooltip"
          data-tip={`This question is worth ${points} point${points > 1 ? 's.' : '.'}`}
        >
          <span
            className={`text-xs sm:text-sm px-2 py-0.5 rounded-full ${badgeStyles[difficulty]}`}
          >
            {difficultyLabels[difficulty]}
          </span>
        </div>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold bangers-regular">{text}</h2>
      <div className="flex text-base sm:text-xl flex-wrap gap-1 items-center text-justify nanum-myeongjo-regular">
        <StatementWithBadges
          statement={statement}
          fixes={fixes}
          selectedWords={selectedWords}
          onSelectWord={handleWordSelection}
        />
      </div>
    </div>
  );
};

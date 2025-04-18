import { FC } from 'react';

import { StatementWithBadges } from 'components/StatementWithBadges';

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
  type?: 'black' | 'white';
  statement: string;
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
  type = 'black',
  fixes = [],
  selectedWords,
  onSelectWord,
  isFlashing = false,
}) => {
  const isBlackCard = type === 'black';

  const handleWordSelection = (
    position: number,
    suggestion: string,
    endPosition?: number,
    groupId?: string
  ) => {
    onSelectWord(position, suggestion, endPosition, groupId);
  };

  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl sm:rounded-2xl 
            shadow-xl p-4 sm:p-6 m-auto border-4 sm:border-8 rotate-[0.042rad]
            ${isBlackCard ? 'bg-black text-white border-gray-800' : 'bg-white text-black border-gray-300'}
            ${isFlashing ? 'animate-border-flash' : ''}
            font-sans select-none justify-center`}
    >
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

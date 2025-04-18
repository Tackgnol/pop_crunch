import {FC, ReactNode} from "react";
import { WordBadge } from './WordBadge';

export interface IFix {
    word: string;
    position: number;
    options: {
        suggestion: string;
        correct: boolean;
    }[];
}

interface ICardProps {
    text: string;
    type?: "black" | "white";
    statement: string;
    fixes?: IFix[];
    selectedWords: Record<number, string>;
    onSelectWord: (position: number, suggestion: string) => void;
    isFlashing?: boolean;
}

const badgeColors = [
    'badge-accent',
    'badge-info',
    'badge-success',
];

export const GameCard: FC<ICardProps> = ({
    text,
    statement,
    type = "black",
    fixes = [],
    selectedWords,
    onSelectWord,
    isFlashing = false
}) => {
    const isBlackCard = type === "black";

    const handleWordSelection = (position: number, suggestion: string) => {
        onSelectWord(position, suggestion)
    };

    const renderStatementWithBadges = () => {
        if (!fixes || fixes.length === 0) return statement;

        const words = statement.split(' ');
        const result: (string | ReactNode)[] = [];
        let currentIndex = 0;

        words.forEach((word, index) => {
            const fix = fixes.find(f => f.position === index);
            if (fix) {
                if (currentIndex < index) {
                    result.push(words.slice(currentIndex, index).join(' ') + ' ');
                }
                result.push(
                    <WordBadge
                        key={index}
                        word={selectedWords[index] || word}
                        options={fix.options}
                        position={index}
                        badgeColor={badgeColors[index % badgeColors.length]}
                        onSelect={handleWordSelection}
                    />
                );
     

                result.push(' ');
                currentIndex = index + 1;
            }
        });


        if (currentIndex < words.length) {
            result.push(words.slice(currentIndex).join(' '));
        }

        return <>{result.filter(item => item !== '')}</>;
    };

    return (
        <div
            className={`flex flex-col gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl sm:rounded-2xl 
            shadow-xl p-4 sm:p-6 m-auto border-4 sm:border-8 rotate-[0.042rad]
            ${isBlackCard ? "bg-black text-white border-gray-800" : "bg-white text-black border-gray-300"}
            ${isFlashing ? 'animate-border-flash' : ''}
            font-sans select-none justify-center`}
        >
            <h2 className="text-lg sm:text-xl font-semibold bangers-regular">{text}</h2>
            <div className="flex text-base sm:text-xl flex-wrap gap-1 items-center text-justify nanum-myeongjo-regular">
                {renderStatementWithBadges()}
            </div>
        </div>
    );
};

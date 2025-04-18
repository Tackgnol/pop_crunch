import { FC, useRef } from 'react';

interface IOption {
    suggestion: string;
    correct: boolean;
}

interface IWordBadgeProps {
    word: string;
    options: IOption[];
    position: number;
    badgeColor: string;
    onSelect: (position: number, suggestion: string) => void;
}

export const WordBadge: FC<IWordBadgeProps> = ({
    word,
    options,
    position,
    badgeColor,
    onSelect,
}) => {
    const detailsRef = useRef<HTMLDetailsElement | null>(null);

    const handleOptionClick = (suggestion: string) => {
        onSelect(position, suggestion);
        detailsRef.current?.removeAttribute('open');
    };

    return (
        <div className="dropdown dropdown-bottom inline-block">
            <details ref={detailsRef} className="dropdown-container">
                <summary
                    className={`badge ${badgeColor} hover:opacity-90 cursor-pointer transition-all duration-200 hover:scale-105`}
                >
                    {word}
                </summary>
                <ul className="dropdown-content z-[20] menu p-2 shadow-lg bg-base-100 rounded-box w-52
                    mt-2 animate-[dropdownFade_0.2s_ease-in-out]">
                    {options.map((option, optionIndex) => (
                        <li key={optionIndex}>
                            <button
                                onClick={() => handleOptionClick(option.suggestion)}
                                className="rounded-lg transition-colors duration-200 hover:bg-base-200 active:bg-base-300"
                            >
                                {option.suggestion}
                            </button>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
};

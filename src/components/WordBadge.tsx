import { FC, useRef } from 'react';
import { IOption } from 'src/models.ts';

interface IWordBadgeProps {
  text: string;
  options: IOption[];
  position: number;
  endPosition?: number;
  groupId?: string;
  badgeColor: string;
  onSelect: (position: number, suggestion: string, endPosition?: number, groupId?: string) => void;
}

export const WordBadge: FC<IWordBadgeProps> = ({
  text,
  options,
  position,
  endPosition,
  groupId,
  badgeColor,
  onSelect,
}) => {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const handleOptionClick = (suggestion: string) => {
    onSelect(position, suggestion, endPosition, groupId);
    detailsRef.current?.removeAttribute('open');
  };

  return (
    <div className="dropdown dropdown-bottom inline-block">
      <details ref={detailsRef} className="dropdown-container">
        <summary
          className={`badge ${badgeColor} hover:opacity-90 cursor-pointer transition-all duration-200 hover:scale-105 min-w-[80px]`}
        >
          {text}
        </summary>
        <ul
          className="dropdown-content z-[20] menu p-2 shadow-lg bg-base-100 rounded-box w-52
                    mt-2 animate-[dropdownFade_0.2s_ease-in-out]"
        >
          {options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <button
                onClick={() => handleOptionClick(option.suggestion)}
                className="btn btn-ghost w-full text-left px-2 py-1 duration-200 hover:bg-base-200"
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

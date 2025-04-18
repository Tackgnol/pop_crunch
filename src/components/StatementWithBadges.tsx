import { ReactNode } from "react";
import {IFix} from "../models.ts";
import { WordBadge } from './WordBadge';


interface StatementWithBadgesProps {
    statement: string;
    fixes: IFix[];
    selectedWords: Record<number, { text: string, endPosition?: number, groupId?: string }>;
    onSelectWord: (position: number, suggestion: string, endPosition?: number, groupId?: string) => void;
}

const badgeColors = [
    'badge-primary',
    'badge-secondary',
    'badge-error',
    'badge-accent',
    'badge-info',
    'badge-success',
    'badge-warning'
];

export const StatementWithBadges = ({ 
    statement, 
    fixes = [], 
    selectedWords, 
    onSelectWord 
}: StatementWithBadgesProps) => {
    if (!fixes || fixes.length === 0) return <div>{statement}</div>;

    const words = statement.split(' ');
    const result: (string | ReactNode)[] = [];
    let currentIndex = 0;


    const sortedFixes = [...fixes].sort((a, b) => a.startPosition - b.startPosition);

    sortedFixes.forEach((fix) => {
        const startPos = fix.startPosition;
        const endPos = fix.endPosition || startPos;

        // Add any text before this fix
        if (currentIndex < startPos) {
            result.push(
                <div key={`text-${currentIndex}-${startPos}`}>
                    {words.slice(currentIndex, startPos).join(' ') + ' '}
                </div>
            );
        }

        const selection = selectedWords[startPos];
        const displayText = selection ? selection.text : fix.text;

        // Create the badge
        result.push(
            <WordBadge
                key={startPos}
                text={displayText}
                options={fix.options}
                position={startPos}
                endPosition={endPos}
                groupId={fix.groupId}
                badgeColor={badgeColors[startPos % badgeColors.length]}
                onSelect={onSelectWord}
            />
        );

        result.push(' ');

        currentIndex = endPos + 1;
    });

    // Add any remaining text after the last badge
    if (currentIndex < words.length) {
        result.push(
            <div key={`text-${currentIndex}-end`}>
                {words.slice(currentIndex).join(' ')}
            </div>
        );
    }


    return <>{result.filter(item => item !== '')}</>;
};

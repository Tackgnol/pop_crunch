import { IFix } from './Card.tsx';

export const toDefaultSelection = (fixes: IFix[]) => {
  return fixes.reduce<Record<number, { text: string; endPosition?: number; groupId?: string }>>(
    (acc, curr) => {
      acc[curr.startPosition] = {
        text: curr.options[0].suggestion,
        endPosition: curr.endPosition,
        groupId: curr.groupId,
      };
      return acc;
    },
    {}
  );
};

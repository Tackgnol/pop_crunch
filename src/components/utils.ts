import {IFix} from "./Card.tsx";

export const toDefaultSelection = (fixes:IFix[]) => {
    return fixes.reduce<Record<number, string>>((acc, curr) => {
        acc[curr.position] = curr.options[0].suggestion;
        return acc;
    }, {})
}


import { getNumbers } from "./getNumbers"

// function takes min, max of range values
export const getRanges = (totals, min, max) => {
    return totals.map(item => {
        let range = getNumbers(item.value);

        return ({
            ...item,
            min: range.length === 2 ? range[0] : range[0] === max ? max : 0,
            max: range.length === 2 ? range[1] : range[0] === min ? min : 99999999
        });
    })
}

// get code from ranges
export const getCode = (value, target, min, max) => {
    const targetRanges = getRanges(target, min, max);
    return targetRanges.find(item => value >= item.min && value < item.max);
}
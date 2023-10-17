import { getNumbers } from "./getNumbers"

// function takes min, max of range values
export const getRange = (totals) => {
    // array contain minimum and maximum 
    let arr = [];

    return totals.map(item => {
        let arrMinMax = getNumbers(item.value);

        let checkLength = arrMinMax.length === 1;
        if (checkLength) arr.push(arrMinMax[0]);

        return ({
            ...item,
            min: (checkLength && arr.indexOf(arrMinMax[0]) === 0) ? 0 : arrMinMax[0],
            max: (checkLength && arr.indexOf(arrMinMax[0]) === 0) ? arrMinMax[0] : arr.indexOf(arrMinMax[0]) === 1 ? 99999999 : arrMinMax[1]
        });
    })
}

// get code from ranges
export const getCode = (range, target) => {
    const targetRanges = getRange(target);
    return targetRanges.filter(item => (item.min >= range[0] && item.min <= range[1]) || (item.max >= range[0] && item.max <= range[1]));
}
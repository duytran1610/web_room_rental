import generateCode from "./generateCode";

const prices = [
    {
        min: 0,
        max: 1,
        value: 'Duoi 1 trieu'
    },
    {
        min: 1,
        max: 2,
        value: 'Tu 1 - 2 trieu'
    },
    {
        min: 2,
        max: 3,
        value: 'Tu 2 - 3 trieu'
    },
    {
        min: 3,
        max: 5,
        value: 'Tu 3 - 5 trieu'
    },
    {
        min: 5,
        max: 7,
        value: 'Tu 5 - 7 trieu'
    },
    {
        min: 7,
        max: 10,
        value: 'Tu 7 - 10 trieu'
    },
    {
        min: 10,
        max: 15,
        value: 'Tu 10 - 15 trieu'
    },
    {
        min: 15,
        max: 9999999,
        value: 'Tren 15 trieu'
    }
];

const areas = [
    {
        min: 0,
        max: 20,
        value: 'Duoi 20m'
    },
    {
        min: 20,
        max: 30,
        value: 'Tu 20m - 30m'
    },
    {
        min: 30,
        max: 50,
        value: 'Tu 30m - 50m'
    },
    {
        min: 50,
        max: 70,
        value: 'Tu 50m - 70m'
    },
    {
        min: 70,
        max: 90,
        value: 'Tu 70m - 90m'
    },
    {
        min: 90,
        max: 9999999,
        value: 'Tren 90m'
    }
];

export const dataPrices = prices.map(item => ({
    ...item,
    code: generateCode(item.value)
}));

export const dataAreas = areas.map(item => ({
    ...item,
    code: generateCode(item.value)
}));
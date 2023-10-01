export const getNumberFromString = (string) => {
    let number = 0;

    if (string.search('đồng/tháng') !== -1)
        number = +string.match(/\d+/)[0] / Math.pow(10,3);
    else
        number = +string.match(/\d+/)[0];

    return number;
}
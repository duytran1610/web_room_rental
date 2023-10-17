// funtion get numbers in string
export const getNumbers = string => string.match(/\d+/g).map(item => +item);
// funtion get numbers in string
export const getNumbers = string => string.match(/\d+/g).map(item => +item);

// create get a part id in userID
export const getPartID = id => id?.match(/\d+/g).join('')?.slice(0,6);

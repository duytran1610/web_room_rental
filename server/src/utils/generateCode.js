require('dotenv').config();

// create code random string/characters
const generateCode = (value) => {
    let output = '';
    value = value
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .split(' ')
                .join('')
    let merge = value + process.env.SECRET_KEY; 
    let length = merge.length;

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(length / 2);
        output += merge[index];
        length = index;
    }

    return `${output}${merge.length}`.toUpperCase();
}

export default generateCode;
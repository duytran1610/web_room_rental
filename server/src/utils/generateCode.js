// create code random string/characters
const generateCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '123456789';  
    const charactersLength = characters.length;
    const numbersLength = numbers.length;
    let code = '';  

    for (let i = 0; i < length - 1; i++) {
        code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    code += numbers.charAt(Math.floor(Math.random() * numbersLength));

    return code;
}

export default generateCode;
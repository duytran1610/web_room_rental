const Buffer = require('buffer/').Buffer;

// convert data type file to type base64
export const fileToBase64 = (file) => new Promise(async (resolve, reject) => {
    const reader = new FileReader();
    console.log(await file.arrayBuffer())
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

// convert blob to base64
export const blobToBase64 = (blob) => blob? new Buffer(blob, 'base64').toString('binary') : '';

const Buffer = require('buffer/').Buffer;

// convert data type file to type base64
// submit form -> http req obj -> read buffer -> store to blob
export const fileToBase64 = (file) => new Promise(async (resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

// convert blob to base64
// read from blob -> to buffer -> build the http response
export const blobToBase64 = (blob) => blob ? new Buffer(blob, 'base64').toString('binary') : '';

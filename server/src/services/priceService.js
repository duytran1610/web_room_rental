import db from "../models";

// get all prices
export const getAllPrices = () => new Promise(async(resolve, reject) => {
    try {
        const prices = await db.Price.findAll({ 
            raw: true,
            attributes: ['code', 'value', 'order']
        });
        resolve({
            err: prices ? 0 : -1,
            msg: prices ? 'Get all prices succeed!' : 'Fail get prices!',
            data: prices
        })
    } catch (err) {
        reject(err);
    }
});
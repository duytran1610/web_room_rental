import db from "../models";

// get all areas
export const getAllAreas = () => new Promise(async(resolve, reject) => {
    try {
        const prices = await db.Area.findAll({ 
            raw: true,
            attributes: ['code', 'value', 'order']
        });
        resolve({
            err: prices ? 0 : -1,
            msg: prices ? 'Get all areas succeed!' : 'Fail get areas!',
            data: prices
        });
    } catch (err) {
        reject(err);
    }
});
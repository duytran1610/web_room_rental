import db from "../models";

// get all provinces
export const getAllProvinces = () => new Promise(async(resolve, reject) => {
    try {
        const provinces = await db.Province.findAll({ 
            raw: true,
            attributes: ['code', 'value']
        });
        resolve({
            err: provinces ? 0 : -1,
            msg: provinces ? 'Get all provinces succeed!' : 'Fail get provinces!',
            data: provinces
        })
    } catch (err) {
        reject(err);
    }
});
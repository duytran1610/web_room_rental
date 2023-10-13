import db from "../models";

// get all category
export const getAllCategories = () => new Promise(async(resolve, reject) => {
    try {
        const categories = await db.Category.findAll({ 
            raw: true
        });
        resolve({
            err: categories ? 0 : -1,
            msg: categories ? 'Get all categories succeed!' : 'Fail get categories!',
            data: categories
        })
    } catch (err) {
        reject(err);
    }
});
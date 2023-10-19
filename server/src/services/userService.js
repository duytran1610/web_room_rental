import db from "../models";

// get current user
export const getUser = (id) => new Promise(async(resolve, reject) => {
    try {
        const user = await db.User.findOne({ 
            where: {id},
            raw: true,
            attributes: {exclude: ['password']}
        });
        resolve({
            err: user ? 0 : -1,
            msg: user ? 'Get information user succeed!' : 'Fail get information user!',
            data: user
        })
    } catch (err) {
        reject(err);
    }
});
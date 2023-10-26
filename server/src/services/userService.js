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

// update user
export const updateUser = (id, payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.User.update(payload, { 
            where: {id},
        });

        resolve({
            err: response[0] > 0 ? 0 : -1,
            msg: response[0] > 0 ? 'Updated information user succeed!' : 'Fail update information user!'
        })
    } catch (err) {
        reject(err);
    }
});
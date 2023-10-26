import * as userService from "../services/userService";

// get current user
export const getUser = async (req, res) => {
    const {id} = req.user;
    try {
        const response = await userService.getUser(id);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at user Controller: ' + err
        });
    }
}

// update user
export const updateUser = async (req, res) => {
    const {id} = req.user;
    const payload = req.body;
    try {
        if (!payload) return res.status(400).json({
            err: -1,
            msg: 'Missing input!'
        });

        const response = await userService.updateUser(id, payload);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at user Controller: ' + err
        });
    }
}
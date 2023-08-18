import authService from "../services/authService";

// register
const register = async (req, res) => {
    const {name, phone, password} = req.body;

    try {
        if (!(name && phone && password)) return res.status(400).json({
            err: -1,
            msg: 'Missing inputs!'
        });
        const message = await authService.register(req.body);
        return res.status(200).json(message);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + err
        });
    }
}

// login
const login = async (req, res) => {
    const {phone, password} = req.body;

    try {
        if (!(phone && password)) return res.status(400).json({
            err: -1,
            msg: 'Missing inputs!'
        });
        const message = await authService.login(req.body);
        return res.status(200).json(message);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + err
        });
    }
}

export default {
    register,
    login
}
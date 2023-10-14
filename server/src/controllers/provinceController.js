import * as provinceService from "../services/provinceService";

export const getAllProvinces = async (req, res) => {
    try {
        const response = await provinceService.getAllProvinces();

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at province Controller: ' + err
        })
    }
}
import * as areaService from "../services/areaService";

export const getAllAreas = async (req, res) => {
    try {
        const response = await areaService.getAllAreas();

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at area Controller: ' + err
        })
    }
}
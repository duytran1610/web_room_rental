import * as insertService from "../services/insertService";

// insert data
export const insertData = async (req, res) => {
    try {
        const response = await insertService.insertDataIntoDB();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at insert controller: ' + err
        });
    }
}

// insert prices and areas
export const insertPricesAndAreas = async (req, res) => {
    try {
        const response = await insertService.createPricesAndAreas();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at insert controller: ' + err
        });
    }
}
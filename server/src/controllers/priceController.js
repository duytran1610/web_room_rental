import * as priceService from "../services/priceService";

export const getAllPrices = async (req, res) => {
    try {
        const response = await priceService.getAllPrices();

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at price Controller: ' + err
        })
    }
}
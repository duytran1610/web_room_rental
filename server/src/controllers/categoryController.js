import * as categoryService from '../services/categoryService';

export const getAllCategories = async (req, res) => {
    try {
        const response =  await categoryService.getAllCategories();

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at category Controller: ' + err
        });
    }
}
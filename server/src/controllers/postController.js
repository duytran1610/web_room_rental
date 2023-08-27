import * as postService from '../services/postService';

export const getAllPosts = async (req, res) => {
    try {
        const response = await postService.getAllPosts();

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}
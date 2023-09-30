import * as postService from '../services/postService';

// get all posts
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

// get to pagination
export const getPostsLimit = async (req, res) => {
    const {page, ...query} = req.query;
    try {
        const response = await postService.getPostsLimit(page, query);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}
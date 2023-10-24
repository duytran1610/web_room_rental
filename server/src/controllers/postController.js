import * as postService from '../services/postService';

//==========================SHOW FOR ALL USERS=================================
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

// get posts to pagination
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

// get new posts at the moment
export const getNewPosts = async (req, res) => {
    try {
        const response = await postService.getNewPostsService();

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}

//==========================SHOW FOR USER (NEED LOGIN)=================================

// create new post
export const createNewPost = async (req, res) => {
    try {
        const {categoryCode, userID, title, priceVal, areaVal, label} = req.body;

        if (!categoryCode || !userID || !title || !priceVal || !areaVal || !label) return res.status(400).json({
            err: -1,
            msg: 'Missing inputs!'
        })

        const response = await postService.createNewPostService(req.body);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}

// get posts in manage posts of user
export const getPostsLimitUser = async (req, res) => {
    const {page, ...query} = req.query;
    const { id } = req.user;
    try {
        if (!id) return res.status(400).json({
            err: -1,
            msg: 'Missing inputs!'
        });

        const response = await postService.getPostsLimitUser(page, id, query);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}
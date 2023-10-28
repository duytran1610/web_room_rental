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

// get posts to pagination or show a post
export const getPostsLimit = async (req, res) => {
    const { page, ...query } = req.query;
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

// get new posts or hot posts
export const getOrderPosts = async (req, res) => {
    const {order} = req.query;
    try {
        const response = await postService.getOrderPostsService(order);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}

// get post by id
export const getPostById = async (req, res) => {
    const { id } = req.query;
    try {
        const response = await postService.getPostById(id);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        });
    }
}

//==========================SHOW FOR USER (NEED LOGIN)=================================

// create new post
export const createNewPost = async (req, res) => {
    try {
        const { categoryCode, userID, title, priceVal, areaVal, label } = req.body;

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
    const { page, ...query } = req.query;
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

// update post 
export const updatePost = async (req, res) => {
    const { postID, attributeID, overviewID, imageID, ...payload } = req.body;
    try {
        if (!postID || !attributeID || !overviewID || !imageID) return res.status(400).json({
            err: -1,
            msg: 'Missing inputs!'
        });

        const response = await postService.updatePost(req.body);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}

// delete post 
export const deletePost = async (req, res) => {
    const { postID, attributeID, overviewID, imageID, labelCode } = req.body;
    try {
        if (!postID || !attributeID || !overviewID || !imageID || !labelCode) return res.status(400).json({
            err: -1,
            msg: 'Missing delete!'
        });

        const response = await postService.deletePost(req.body);

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at post controller: ' + err
        })
    }
}
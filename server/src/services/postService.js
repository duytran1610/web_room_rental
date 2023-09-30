import db from "../models";
require('dotenv').config();

// get infor of all post
export const getAllPosts = () => new Promise(async(resolve, reject) => {
    try {
        const posts = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                {
                    model: db.Image,
                    as: 'imgs',
                    attributes: ['image']
                },
                {
                    model: db.Attribute,
                    as: 'attrs',
                    attributes: ['price', 'acreage', 'published', 'hashtag']
                },
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['name', 'phone', 'zalo']
                }
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        });

        resolve({
            err: posts ? 0 : -1,
            msg: posts ? 'Get all posts succeed!' : 'Fail get posts!',
            data: posts
        });
    } catch (err) {
        reject(err);
    }
});

// get limit number posts (to pagination) with request (query)
export const getPostsLimit = (page, query) => new Promise(async(resolve, reject) => {
    try {
        const posts = await db.Post.findAndCountAll({
            where: query,
            raw: true,
            nest: true,
            offset: page * process.env.LIMIT_PAGINATION || 0,
            limit: process.env.LIMIT_PAGINATION,
            include: [
                {
                    model: db.Image,
                    as: 'imgs',
                    attributes: ['image']
                },
                {
                    model: db.Attribute,
                    as: 'attrs',
                    attributes: ['price', 'acreage', 'published', 'hashtag']
                },
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['name', 'phone', 'zalo']
                }
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        });

        resolve({
            err: posts ? 0 : -1,
            msg: posts ? 'Get posts limit succeed!' : 'Fail get posts!',
            data: posts
        });
    } catch (err) {
        reject(err);
    }
});

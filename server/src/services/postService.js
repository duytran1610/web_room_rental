import db from "../models";
const { Op } = require("sequelize");
import { v4 as uuidv4 } from 'uuid';
import generateCode from "../utils/generateCode";
import moment from 'moment';           // format time 
import 'moment/locale/vi';             // format time with lang vi
import generateDate from "../utils/generateDate";
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
        let offset = (!page || +page <= 1)? 0 : +page - 1;
        if (query.priceVal) query.priceVal = {[Op.between]: query.priceVal}
        if (query.areaVal) query.areaVal = {[Op.between]: query.areaVal}

        const posts = await db.Post.findAndCountAll({
            where: query,
            raw: true,
            nest: true,
            offset: offset * process.env.LIMIT_PAGINATION,
            order: [['createdAt', 'DESC']],
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

// get new posts at time
export const getNewPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const posts = await db.Post.findAll({
            raw: true,
            nest: true,
            offset: 0,
            order: [['createdAt', 'DESC']],
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
                }
            ],
            attributes: ['id', 'title', 'star', 'createdAt']
        });

        resolve({
            err: posts ? 0 : -1,
            msg: posts ? 'Get new posts succeed!' : 'Fail get posts!',
            data: posts
        });
    } catch (err) {
        reject(err);
    }
});

// create new post
export const createNewPostService = (body) => new Promise(async(resolve, reject) => {
    try {
        const attributeID = uuidv4();
        const imageID = uuidv4();
        const overviewID = uuidv4();
        const labelCode = generateCode(body.label);
        const hashtag = `#${Math.floor(Math.random() * Math.pow(10,6))}`;
        const curDate = generateDate(30);
        const provinceName = body.province?.includes('Thành phố')? body.province?.replace('Thành phố ','') : body.province?.replace('Tỉnh ','');
        const provinceCode = generateCode(provinceName);

        // insert data in table Posts
        await db.Post.create({
            id: uuidv4(),
            title: body.title || null,
            labelCode,
            address: body.address || null,
            categoryCode: body.categoryCode,
            description: JSON.stringify(body.description) || null,
            userID: body.userID,
            overviewID,
            imageID,
            areaCode: body.areaCode || null,
            priceCode: body.priceCode || null,
            provinceCode: provinceCode || null,
            priceVal: body.priceVal,
            areaVal: body.areaVal
        });

        // insert data in table Attributes
        await db.Attribute.create({
            id: attributeID,
            price: body.priceVal < 1 ? `${body.priceVal * Math.pow(10,6)} đồng/tháng` : `${body.priceVal} triệu/tháng`,
            acreage: `${body.areaVal} m2`,
            published: moment(curDate).format('DD/MM/YYYY'),
            hashtag
        });

        // insert data in table Images
        await db.Image.create({
            id: imageID,
            image: JSON.stringify(body.images)
        });

        // insert data in table Overviews
        await db.Overview.create({
            id: overviewID,
            code: hashtag,
            area: body.label,
            type: body.category || null,
            target: body.target,
            bonus: 'Tin thường',
            created: curDate.today,
            expire: curDate.expireDay,
        });

        // insert data in table Labels
        await db.Label.findOrCreate({
            where: { code: labelCode },
            defaults: {
                value: body.label
            }
        });

        // insert data in table Provinces
        await db.Province.findOrCreate({
            where: { code: provinceCode },
            defaults: {
                value: provinceName
            }
        });

        resolve({
            err: 0,
            msg: 'Create a new post succeed!'
        });
    } catch (err) {
        reject(err);
    }
});

// get posts in manage posts of user
export const getPostsLimitUser = (page, id, query) => new Promise(async(resolve, reject) => {
    try {
        let offset = (!page || +page <= 1)? 0 : +page - 1;
        const queries = {...query, userID: id}

        const posts = await db.Post.findAndCountAll({
            where: queries,
            raw: true,
            nest: true,
            offset: offset * process.env.LIMIT_PAGINATION,
            order: [['createdAt', 'DESC']],
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
                    model: db.Overview,
                    as: 'overviews'
                },
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['name', 'phone', 'zalo']
                }
            ],
            // attributes: ['id', 'title', 'star', 'address', 'description']
        });

        resolve({
            err: posts ? 0 : -1,
            msg: posts ? 'Get posts limit admin succeed!' : 'Fail get posts admin!',
            data: posts
        });
    } catch (err) {
        reject(err);
    }
});

// update post 
export const updatePost = (data) => new Promise(async(resolve, reject) => {
    try {
        const {postID, attributeID, overviewID, imageID, ...body} = data;
        const labelCode = generateCode(body.label);
        const provinceName = body.province?.includes('Thành phố')? body.province?.replace('Thành phố ','') : body.province?.replace('Tỉnh ','');
        const provinceCode = generateCode(provinceName);

        // update data in table Posts
        await db.Post.update({
            title: body.title || null,
            labelCode,
            address: body.address || null,
            categoryCode: body.categoryCode,
            description: JSON.stringify(body.description) || null,
            areaCode: body.areaCode || null,
            priceCode: body.priceCode || null,
            provinceCode: provinceCode || null,
            priceVal: body.priceVal,
            areaVal: body.areaVal
        }, {where: {id: postID}});

        // update data in table Attributes
        await db.Attribute.update({
            price: body.priceVal < 1 ? `${body.priceVal * Math.pow(10,6)} đồng/tháng` : `${body.priceVal} triệu/tháng`,
            acreage: `${body.areaVal} m2`,
        }, {where: {id: attributeID}});

        // update data in table Images
        await db.Image.update({
            image: JSON.stringify(body.images)
        }, {where: {id: imageID}});

        // insert data in table Overviews
        await db.Overview.update({
            area: body.label,
            type: body.category || null,
            target: body.target,
        }, {where: {id: overviewID}});

        // insert data in table Labels
        await db.Label.findOrCreate({
            where: { code: labelCode },
            defaults: {
                value: body.label
            }
        });

        // insert data in table Provinces
        await db.Province.findOrCreate({
            where: { code: provinceCode },
            defaults: {
                value: provinceName
            }
        });

        resolve({
            err: 0,
            msg: 'Updated!'
        });
    } catch (err) {
        reject(err);
    }
});
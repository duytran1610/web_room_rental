import db from '../models';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import generateCode from "../utils/generateCode";
import { dataPrices, dataAreas } from '../utils/data';
import { getNumberFromString } from '../utils/common';
import nhachothue from "../../data/nhachothue.json";
require('dotenv').config();


// generate a salt for hash password
const saltRounds = 10;

// To hash a password:
const hashPassword = (pwd) => new Promise((resolve, reject) => {
    try {
        let hashPwd = bcrypt.hash(pwd, saltRounds);
        resolve(hashPwd);
    } catch (err) {
        register('Hash password errol: ' + err);
    }   
});

// get data body
const dataBody = nhachothue.body;

// get data from directory data and insert into tables in db
export const insertDataIntoDB = (data) => new Promise((resolve, reject) => {
    try {        
        dataBody.forEach(async item => {
            let postID = uuidv4();
            let labelCode = generateCode(item.header?.class?.classType);
            let attributeID = uuidv4();
            let userID = uuidv4();
            let overviewID = uuidv4();
            let imageID = uuidv4();
            let hashPwd = await hashPassword('123456');
            let desc = JSON.stringify(item.mainContent?.content);
            let curArea = getNumberFromString(item.header?.attributes?.acreage);
            let curPrice = getNumberFromString(item.header?.attributes?.price);

            // insert data in table Posts
            await db.Post.create({
                id: postID,
                title: item.header?.title,
                star: item.header?.star,
                labelCode,
                address: item.header?.address,
                attributeID,
                categoryCode: 'NCT',
                description: desc,
                userID,
                overviewID,
                imageID,
                areaCode: dataAreas.find(area => area.max > curArea && curArea >= area.min)?.code,
                priceCode: dataPrices.find(price => price.max > curPrice && curPrice >= price.min)?.code
            });
        
            // insert data in table Attributes
            await db.Attribute.create({
                id: attributeID,
                price: item.header?.attributes?.price,
                acreage: item.header?.attributes?.acreage,
                published: item.header?.attributes?.published,
                hashtag: item.header?.attributes?.hashtag
            });

            // insert data in table Images
            await db.Image.create({
                id: imageID,
                image: JSON.stringify(item.imgs)
            });

            // insert data in table Labels
            await db.Label.findOrCreate({
                where: {code: labelCode},
                defaults: {
                    code: labelCode,
                    value: item.header?.class?.classType
                }
            });

            // insert data in table Overviews
            await db.Overview.create({
                id: overviewID,
                code: item.overview?.content?.find(i => i.name === "Mã tin:")?.content,
                area: item.overview?.content?.find(i => i.name === "Khu vực")?.content,
                type: item.overview?.content?.find(i => i.name === "Loại tin rao:")?.content,
                target: item.overview?.content?.find(i => i.name === "Đối tượng thuê:")?.content,
                bonus: item.overview?.content?.find(i => i.name === "Gói tin:")?.content,
                created: item.overview?.content?.find(i => i.name === "Ngày đăng:")?.content,
                expire: item.overview?.content?.find(i => i.name === "Ngày hết hạn:")?.content,
            });

            // insert data in table Users
            await db.User.create({
                id: userID,
                name: item.contact?.content?.find(i => i.name === "Liên hệ:")?.content,
                password: hashPwd,
                phone: item.contact?.content?.find(i => i.name === "Điện thoại:")?.content,
                zalo: item.contact?.content?.find(i => i.name === "Zalo")?.content,
            })
        });

        resolve('Done!');
        
    } catch (err) {
        reject(err);
    }
});

// insert data price and area
export const createPricesAndAreas = () => new Promise((resolve, reject) => {
    try {
        dataPrices.forEach(async(item, index) => {
            await db.Price.create({
                code: item.code,
                value: item.value,
                order: index + 1
            })
        });

        dataAreas.forEach(async(item, index) => {
            await db.Area.create({
                code: item.code,
                value: item.value,
                order: index + 1
            })
        });

        resolve('Insert data into tables prices and areas');
    } catch (err) {
        reject(err);
    }
});
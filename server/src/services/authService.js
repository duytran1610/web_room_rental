import db from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
require('dotenv').config();

// generate a salt for hash password
const saltRounds = 10;

// register a new user
const register = (data) => new Promise(async (resolve, reject) => {
    try {
        let hashPwd = await hashPassword(data.password);
        const {name, phone, password} = {...data, password: hashPwd};

        const [user, created] = await db.User.findOrCreate({
            where: {phone},
            defaults: {
                name, phone, password,
                id: uuidv4()
            }
        });

        // check create new user then create token
        const token = created && jwt.sign(
            {
                id: user.id,
                phone: user.phone
            },
            process.env.SECRET_KEY,
            {expiresIn: '2d'}
        );

        resolve({
            err: token ? 0 : -1,
            msg: token ? 'Register is successfully!' : 'Phone number has been already used!',
            token: token || null
        })
        
    } catch (err) {
        reject(err);
    }
});

// To hash a password:
const hashPassword = (pwd) => new Promise((resolve, reject) => {
    try {
        let hashPwd = bcrypt.hash(pwd, saltRounds);
        resolve(hashPwd);
    } catch (err) {
        register('Hash password errol: ' + err);
    }   
});

// login
const login = (data) => new Promise(async (resolve, reject) => {
    try {
        const {phone, password} = data;

        const user = await db.User.findOne({
            where: {phone},
            raw: true
        });

        const isCheckLogin = user && await bcrypt.compare(password, user.password);

        // check login then create token
        const token = isCheckLogin && jwt.sign(
            {
                id: user.id,
                phone: user.phone
            },
            process.env.SECRET_KEY,
            {expiresIn: '2d'}
        );

        resolve({
            err: token ? 0 : -1,
            msg: token ? 'Login is successfully!' : user ? 'Password was wrong!' : 'Phone not found',
            token: token || null
        })
        
    } catch (err) {
        reject(err);
    }
});

export default {
    register,
    login
}
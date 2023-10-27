import express from 'express';
require('dotenv').config();
import cors from 'cors';
import connectDB from './config/connectDB';
import Route from './routes';

// init app
const app = express();

// get port server
const port = process.env.PORT || 8888;

// config cors
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}));

// create middleware (req.body) for request method POST, that allows the server to get and process data from the user
// cho phép tăng dung lượng tham số truy vấn lên 10mb
app.use(express.urlencoded({
    extended: true,
    limit: '10mb'
}));
app.use(express.json({limit: '10mb'}));

// connect database
connectDB(app);

// Template engine and static file

// route
// action -----> dispatcher -------> function handler
Route(app);

// connect to port, start server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
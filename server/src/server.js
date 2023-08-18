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
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

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
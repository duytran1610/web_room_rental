import authRouter from "./auth";

const Route = (app) => {
    app.use('/api/v1/auth', authRouter);


    app.use('/', (req, res) => {
        res.json('start server ...');
    })
}

export default Route;
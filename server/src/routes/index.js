import authRouter from "./auth";
import insertRouter from "./insert";

const Route = (app) => {
    app.use('/api/v1/auth', authRouter);

    app.use('/api/v1/insert', insertRouter);


    app.use('/', (req, res) => {
        res.json('start server ...');
    })
}

export default Route;
import { Application } from "express";
import { errorMessage } from "iyasunday";
import Vacines from '../modules/vacine';

export default (app: Application): void => {
    const apiVersion: string = '/v1';
    app.use(apiVersion, Vacines);

    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Server is up!'
        });
    });

    app.use((err, req, res, next) => {
        if (err) {
            res.status(err.httpStatusCode || 400).json(errorMessage(err));
            return res.end();
        }
        return next();
    });

    app.use((req, res, next) => {
        res.status(404).json({
            message: "Requested route not found",
            service: process.env.APP_NAME,
        });
    });
};

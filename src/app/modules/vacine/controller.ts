import { Request, Response, NextFunction } from 'express';
import * as services from './services';

export const create = async (
    req,
    res: Response,
    next: NextFunction
) => {
    try {
        res.status(201).json(await services.create(req.body));
    } catch (error) {
        next(error);
    }
}

export const list = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.status(200).json(await services.list({
            limit: Number(req.query.limit),
            page: Number(req.query.page),
            Region: req.query.Region as string,
            c: req.query.c as string,
            dateFrom: req.query.dateFrom as string,
            dateTo: req.query.dateTo as string,
            range: Number(req.query.range),
            sort: req.query.sort as string,
        }));
    } catch (error) {
        next(error);
    }
}
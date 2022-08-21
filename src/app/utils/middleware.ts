import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,  // 1 minute
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: function (req, res, next) {
        return res.status(429).json({
            status: false,
            message: `Too many request sent, Please wait a while and try again`,
            service: process.env.APP_NAME,
        })
    }
})
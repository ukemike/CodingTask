import Joi from "joi";

export default {
    create: {
        body: {
            schema: Joi.object({
                YearWeekISO: Joi.string(),
                FirstDose: Joi.number().integer().positive(),
                FirstDoseRefused: Joi.string(),
                SecondDose: Joi.number().integer().positive(),
                DoseAdditional1: Joi.number().integer().positive(),
                DoseAdditional2: Joi.number().integer().positive(),
                UnknownDose: Joi.number().integer().positive(),
                NumberDosesReceived: Joi.number().integer().positive(),
                NumberDosesExported: Joi.number().integer().positive(),
                Region: Joi.string(),
                Population: Joi.string(),
                ReportingCountry: Joi.string(),
                TargetGroup: Joi.string(),
                Vaccine: Joi.string(),
                Denominator: Joi.number().integer().positive()
            })
        }
    },

    list: {
        query: {
            schema: Joi.object({
                limit: Joi.number().integer().positive().default(20),
                page: Joi.number().integer().positive().default(1),
                count: Joi.number().default(0),
                c: Joi.string(),
                dateFrom: Joi.string(),
                dateTo: Joi.string(),
                range: Joi.number().integer().positive().default(5),
                sort: Joi.string()
            })

        }
    }
}
import { vacine } from '../../../tests/mockData';
import { paginate } from "iyasunday";
import { createVacineFunction, listVacineFunction } from "./interface";
import { Vacine } from "./model";

export const create: createVacineFunction = async () => {
    let newVacine = await Vacine.create(vacine[0]);
    return {
        success: true,
        message: `Vacine created`,
        data: newVacine
    }
}

export const list: listVacineFunction = async (query) => {
    const { limit, page, c, dateFrom, dateTo, range } = query;
    const where: any = {};

    if (c) where.Region = c;

    if (dateFrom) where.YearWeekISO = { $gte: dateFrom };

    if (dateTo) where.YearWeekISO = { $lte: dateTo };

    if (range) where.YearWeekISO = { $gte: dateFrom, $lte: dateTo };

    const vacineCount = await Vacine.count({ ...where });

    const { offset, pageCount } = paginate(vacineCount, page, limit);
    let weekStart = dateFrom;
    let weekEnd = dateTo;

    const vacines = await Vacine.find({ ...where }, {
        weekStart,
        weekEnd,
        NumberDosesReceived: 1,
    }).sort({ YearWeekISO: 1 }).limit(limit).skip(offset)

    return {
        success: true,
        message: `Vacine summary fetched successfully`,
        data: {
            summary: vacines,
            page,
            pageCount,
            count: vacines.length,
            total: vacineCount
        }
    }
}

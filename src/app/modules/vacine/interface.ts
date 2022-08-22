import { ObjectId } from 'mongoose';

export interface VacineInterface {
    _id: ObjectId | string;
    YearWeekISO: string;
    FirstDose: number;
    FirstDoseRefused: string;
    SecondDose: number;
    DoseAdditional1: number;
    DoseAdditional2: number;
    UnknownDose: number;
    NumberDosesReceived: number;
    NumberDosesExported: number;
    Region: string;
    Population: string;
    ReportingCountry: string;
    TargetGroup: string;
    Vaccine: string;
    Denominator: number;
}

interface defaultResponseInterface {
    success: boolean,
    message: string,
    data: VacineInterface | [VacineInterface] | unknown
}

export type createVacineFunction = (
    body: {
        YearWeekISO: string,
        FirstDose: number,
        FirstDoseRefused: string,
        SecondDose: number,
        DoseAdditional1: number,
        DoseAdditional2: number,
        UnknownDose: number,
        NumberDosesReceived: number,
        NumberDosesExported: number,
        Region: string,
        Population: string,
        ReportingCountry: string,
        TargetGroup: string,
        Vaccine: string,
        Denominator: number
    }
) => Promise<defaultResponseInterface>;

export type listVacineFunction = (
    query: {
        limit: number,
        page: number,
        c: string,
        dateFrom: string,
        dateTo: string,
        range: number,
        sort: string,
    }
) => Promise<defaultResponseInterface>;
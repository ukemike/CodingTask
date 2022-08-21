import { VacineInterface } from "./interface";
import { Schema, model } from 'mongoose';

function omitPrivate(doc, obj) {
    delete obj.__v;
    delete obj.id;
    return obj;
}

const VacineSchema = new Schema<VacineInterface>({
    YearWeekISO: { type: String },
    FirstDose: { type: Number },
    FirstDoseRefused: { type: String },
    SecondDose: { type: Number },
    DoseAdditional1: { type: Number },
    DoseAdditional2: { type: Number },
    UnknownDose: { type: Number },
    NumberDosesReceived: { type: Number },
    NumberDosesExported: { type: Number },
    Region: { type: String },
    Population: { type: String },
    ReportingCountry: { type: String },
    TargetGroup: { type: String },
    Vaccine: { type: String },
    Denominator: { type: Number }

}, { toJSON: { virtuals: true, transform: omitPrivate } })


export const Vacine = model("vacine", VacineSchema);
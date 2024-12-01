import { ForecastType } from "../enums/forecast-type";

export interface Forecast {
    readonly date: Date,
    temperature: number,
    type: ForecastType,
    location: string,
    rainfall?: number
}

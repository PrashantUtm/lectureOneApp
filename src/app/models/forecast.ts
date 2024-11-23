import { ForecastType } from "../enums/forecast-type";

export interface Forecast {
    date: Date,
    temperature: number,
    type: ForecastType,
    location: string
}

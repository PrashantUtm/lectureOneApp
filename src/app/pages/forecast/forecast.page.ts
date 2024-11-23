import { Component, OnInit } from '@angular/core';
import { ForecastType } from 'src/app/enums/forecast-type';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  public forecastType = ForecastType;

  public currentForecast: Forecast = {
    date: new Date(),
    location: 'Port Louis',
    temperature: 30,
    type: ForecastType.Cloudy
  };

  constructor() { }

  ngOnInit() {
  }

}

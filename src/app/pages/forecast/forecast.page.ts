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

  public forecasts: Forecast[] = [
    {
      date: new Date(),
      location: 'Port Louis',
      temperature: 30,
      type: ForecastType.Cloudy,
      rainfall: 20
    },
    {
      date: new Date(),
      location: 'Pointe au Sable',
      temperature: 31,
      type: ForecastType.Sunny
    },
    {
      date: new Date(2024, 11, 1),
      location: 'Curepipe',
      temperature: 25,
      type: ForecastType.Rainy,
      rainfall: 20
    }
  ]

  public currentForecast: Forecast = {
    date: new Date(),
    location: 'Port Louis',
    temperature: 30,
    type: ForecastType.Cloudy,
    rainfall: 20
  };

  constructor() { 
    //this.currentForecast.date = new Date(2024, 12, 11);
    this.currentForecast.temperature = 30;
  }

  ngOnInit() {
  }

}

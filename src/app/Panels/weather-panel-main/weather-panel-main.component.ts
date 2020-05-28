import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './weather-api.service';
import { Subscription, Subject, interval } from 'rxjs';
import { takeUntil, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-weather-panel-main',
  templateUrl: './weather-panel-main.component.html',
  styleUrls: ['./weather-panel-main.component.css'],
})
export class WeatherPanelMainComponent implements OnInit {
  WeatherData: any;
  errorOccured = false;
  locationFetched = false;
  clrInterval;
  climate: string;
  panelClick = false;

  constructor(private weatherApiService: WeatherApiService) {}

  ngOnInit(): void {}

  panelClicked() {
    this.panelClick = true;
  }

  getWeatherByCityName(city) {
    this.weatherApiService
      .getWeatherDataByCityName(city)
      .pipe()
      .subscribe(
        (data) => {
          this.setWeatherData(data);
          this.errorOccured = false;
          this.locationFetched = true;
        },
        (error) => {
          this.errorOccured = true;
        }
      );
  }

  getCity(city) {
    this.getWeatherByCityName(city);

    this.clrInterval = setInterval(() => {
      this.weatherApiService.getWeatherDataByCityName(city).subscribe(
        (data) => {
          this.setWeatherData(data);
          this.errorOccured = false;
          this.locationFetched = true;
        },
        (error) => {
          this.errorOccured = true;
        }
      );
    }, 30000);
  }

  editLocation() {
    this.locationFetched = false;
    clearInterval(this.clrInterval);
  }

  setWeatherData(data) {
    this.WeatherData = data;
    let iconId = this.WeatherData.weather[0].icon;
    switch (iconId) {
      case '01d':
        this.climate = 'sunny';
        break;
      case '01n':
        this.climate = 'night';
        break;
      case '02d':
        this.climate = 'sunny';
        break;
      case '02n':
        this.climate = 'night';
        break;
      case '03d':
        this.climate = 'cloud';
        break;
      case '03n':
        this.climate = 'night';
        break;
      case '04d':
        this.climate = 'cloud';
        break;
      case '04n':
        this.climate = 'night';
        break;
      case '09d':
        this.climate = 'rain';
        break;
      case '09n':
        this.climate = 'night';
        break;
      case '10d':
        this.climate = 'rain';
        break;
      case '10n':
        this.climate = 'night';
        break;
      case '11d':
        this.climate = 'rain';
        break;
      case '11n':
        this.climate = 'night';
        break;
      case '13d':
        this.climate = 'snow';
        break;
      case '13n':
        this.climate = 'night';
        break;
      case '50d':
        this.climate = 'mist';
        break;
      case '50n':
        this.climate = 'night';
        break;

      default:
        break;
    }

    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.WeatherData.temp_feels_like = (
      this.WeatherData.main.feels_like - 273.15
    ).toFixed(0);
  }
}

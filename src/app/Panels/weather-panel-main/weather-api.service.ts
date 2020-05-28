import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  ulr = 'https://api.openweathermap.org/data/2.5/weather';

  apiKey = 'df7204606e4b1b3d2218bc68d2d148f3';
  constructor(private http: HttpClient) {}

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams().set('q', city).set('appid', this.apiKey);

    return this.http.get(this.ulr, {
      params,
    });
  }
}

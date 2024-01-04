import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey="695ed9f29c4599b7544d0db5c211d499";
  constructor(private http:HttpClient) { }
  getweather(city: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={this.apiKey}`);
   // https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499
  }
}

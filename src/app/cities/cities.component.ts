import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { Ste } from '../city';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  

  selectedCity: City;
  state: Ste = {tempMax: 15,
  tempMin: 10,
  states: 'Clear'}
  cities: City[];

  constructor(private wetService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather("WeatherService : City Selector");
  }

  onSelect(cite: City): void{
    this.selectedCity = cite;
  }

  getWeather(messa: string): void{
    this.wetService.getCitty(messa)
    .subscribe(cities => this.cities = cities)
  }

}

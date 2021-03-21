import { Component, OnInit } from '@angular/core';
import { Ste, Res } from '../city';
import { Location } from '@angular/common';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  citySearch : string = '';
  cerror:boolean = false ;
  loading = false;
  assign  = 0;
  state: Res;
  
  constructor(private wetService: WeatherService,
              private location: Location) { }

  ngOnInit() {}

  showSelect() {
    this.state = null;
    if( this.citySearch.length < 1 ){
      this.cerror = true;
      return;
    } else {
      this.cerror = false;
    }
    if( !this.state ){
      this.loading = true;
    }  
    this.reqWeather();

  }

  clear() {
    this.state = null;
  }

  reqWeather() {
    
    let urrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.citySearch + '&units=metric&APPID=a963e1447fbd843371f9f012af0c10d3';
    this.wetService.getWeatherInfo(urrl).subscribe(
      info => {
        this.loading = false;
        this.state = info;
        this.state.main.temp_max = Math.round(info.main.temp_max);
        this.state.main.temp_min = Math.round(info.main.temp_min);
        
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}

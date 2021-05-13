import { Component, OnInit , HostBinding, Output , EventEmitter, Input, ViewChild } from '@angular/core';
import { Res , City } from '../city';
import { WeatherService } from '../weather.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit {
  
  tdos : TodoItem[];
  
  errorLocation : any ;
  content: Res ={
    weather: [{
      main: 'Clear',
      description: 'Sunny',
      }],
  main: {
      temp_min: 15,
      temp_max: 22},
      id: 0,
      name: 'wethwr',
  } 
  

  constructor(private wetService: WeatherService ) { }

  ngOnInit() {

    /*this.getCity("WeatherService : Main Page");
    for (let i = 0; i < this.items.length; i++) {
      this.itArray.push(this.items[i]);
    }*/
    //this.getLocation();
  }

  /*getCity(messa: string):void {
    this.wetService.getCitty(messa)
    .subscribe(cities => this.cities = cities)
  }

  getLocation():void{
    console.log("dsdf");
    var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";
    //if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position,'erer');
          bdcApi = bdcApi
              + "?latitude=" + position.coords.latitude
              + "&longitude=" + position.coords.longitude
              + "&localityLanguage=en";
          this.getApi(bdcApi);
        (error)=>{this.errorLocation = error;}  
    })
  }

  getApi(bdcApi) {
    console.log( this.wetService.getLocation );
  }*/
}
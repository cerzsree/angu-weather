import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Res , City } from '../city';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-weather-info-card',
  templateUrl: './weather-info-card.component.html',
  styleUrls: ['./weather-info-card.component.scss'],
  animations: [
    trigger('weatherFade',[
      transition(':enter', [
        style({ transform:'translateX(-100%)',opacity:0 }),
        animate('1500ms', style({ transform:'translateX(0)',opacity : 1 }))
      ]),
      transition(':leave',[
        animate('1500ms',style({opacity : 0})),
      ])
    ])
    ,
    trigger('mnFade',[
      transition(':enter', [
        style({ transform:'translateX(+100%)',opacity:0 }),
        animate('1500ms', style({ transform:'translateX(0)',opacity : 1 }))
      ]),
      transition(':leave',[
        animate('1500ms',style({opacity : 0})),
      ])
    ]),
    trigger('errFade',[
      transition(':enter', [
        style({ opacity:0 }),
        animate('300ms', style({ opacity : 1 }))
      ]),
      transition(':leave',[
        animate('300ms',style({opacity : 0})),
      ])
    ]),
    trigger('searchFade',[
      transition(':enter', [
        style({ transform: 'translateY(-100%)' ,opacity:0 }),
        animate('1000ms', style({ transform: 'translateY(0)' , opacity : 1 }))
      ]),
      transition(':leave',[
        animate('1000ms',style({opacity : 0})),
      ])
    ])
  ]
})

export class WeatherInfoCardComponent implements OnInit {

  searching:boolean = false;
  srce? : string;
  cityLocation? : string ;
  cityForSearch : string = "";
  backgroundStyle : string ;
  error:string = "Fetching wearher information,Please Wait!";
  content?: Res ;
  cities: City[] = [];
  fetching:boolean = true;

  constructor( private wetService: WeatherService ) {}

  ngOnInit() {
    this.getLocation();
  }

  startSearch():void{
    let state = this.searching;
    this.searching = !state;
  }

  setImageSrc(weatherState : string):void{
    switch ( weatherState ) {
      case "Rain":
        this.backgroundStyle = "#455464";
        this.srce = "../../assets/img/weatherlorerain.gif";
        break;
      case "Cloud":
        this.backgroundStyle = "#ffa600";
        this.srce = "../../assets/img/cl.gif";
        break;
      case "clear sky":
        this.backgroundStyle = "#ffa600";
        this.srce = "../../assets/img/su.gif";
        break;
    
      default:
        this.srce = "../../assets/img/cl.gif";
        break;
    }
  }

  getCity(messa: string):void {
    this.wetService.getCitty(messa)
    .subscribe(cities => this.cities = cities)
  }

  getLocation():void{
    let bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";
    
      navigator.geolocation.getCurrentPosition((res)=>{
        bdcApi = bdcApi
                    + "?latitude=" + res.coords.latitude
                    + "&longitude=" + res.coords.longitude
                    + "&localityLanguage=en";
                this.getApi(bdcApi);
      },(err) => {
        this.getApi(bdcApi);
      },{timeout:2000});
  }
  getApi(bdcApi) {
    this.wetService.getLoc(bdcApi).subscribe(data => {
      if(data != 'Error'){
        this.cityLocation = data.principalSubdivision;
        this.getwet(data.principalSubdivision);
      }else{
        this.error = "Failed to Connect,Check your connection";
      }
    })
  }

  //get the weather state
    getwet(city:string){
      this.fetching = false;
      this.cityLocation = city;
      if(city.length < 1){
        this.cityForSearch = "Please enter city name";
        return;
      }
      this.wetService.getCity(city).subscribe(d => {
        this.searching = false;
        this.content = {
          weather: [{
              main: d.weather[0].main,
              description: d.weather[0].description,
              }],
          main: {
              temp_min: d.main.temp_min,
              temp_max: d.main.temp_max}, 
       id: d.id,
       name: d.name,
      }
      this.setImageSrc(d.weather[0].description);
      });
    }
}

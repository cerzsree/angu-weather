import { Component, OnInit , HostBinding, Output , EventEmitter} from '@angular/core';
import { City } from '../city';
import { WeatherService } from '../weather.service';
import { ITEMS } from '../Todo-items';
import { Item } from '../Item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})


export class DashboardComponent implements OnInit {

  cities: City[] = [];
  items  = ITEMS;
  itArray : Item[] = [];
  idItem : number; 
  clickd:boolean = false;
  cli : number = 0;
  stl : string = '';

  constructor(private wetService: WeatherService) { }

  ngOnInit() {
    this.getCity("WeatherService : Main Page");
    for (let i = 0; i < this.items.length; i++) {
      this.itArray.push(this.items[i]);
    }
  }

  getCity(messa: string):void {
    this.wetService.getCitty(messa)
    .subscribe(cities => this.cities = cities)
  }
}

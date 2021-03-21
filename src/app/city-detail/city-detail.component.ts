import { Component, OnInit , Input } from '@angular/core';
import { Res} from '../city';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  state: Res = {
    weather: [{
        main: 'Clear',
        description: 'Clear',
        }],
    main: {
        temp_min: 5,
        temp_max: 10},
 id: 55,
 name: 'new',
};
  weth: object;
  loading:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private wetService: WeatherService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void {
    this.loading = true;
    const nm = this.route.snapshot.paramMap.get('nm');
    this.wetService.getCity(nm)
    .subscribe(city => {
      this.loading = false;
      this.state = city;
      this.state.main.temp_max = Math.round(city.main.temp_max);
      this.state.main.temp_min = Math.round(city.main.temp_min);
      }
    );
  }

  showMessage(): void{
    this.wetService.gitSte('fetching London')
  }

  goBack(): void {
    this.location.back();
  }

}

import { Injectable } from '@angular/core';
import { City, Ste , Res} from './city';
import { CITIES } from './m-cities';
import { Observable, of, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private messageService: MessageService,
              private http: HttpClient,
              ) { }

  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> =>{
      this.logs('Check youconnection');

      return of(result as T);
    }
  }

  getLoc(loc : string):Observable<any>{ 
    return this.http.get(loc).pipe(catchError(this.handleError<string>('get',"Error")));
  }

  getCity(nm: string): Observable<Res> {
    // TODO: send message after fetching weather
    this.messageService.add('WeatherService: Fetched Weather cityID' + nm);
    const nam = 'https://api.openweathermap.org/data/2.5/weather?q=' + nm + '&units=metric&APPID=a963e1447fbd843371f9f012af0c10d3';
    return this.http.get<Res>(nam).pipe(catchError(this.handleError<Res>('get',{weather:[{main:'',description:''}],main:{temp_min:0,temp_max:0},id:0,name:'error connection to serve,check you connection'})));
  }

  getCitty(mess: string): Observable<City[]> {
    // TODO: send the message _after_ fetching the city
    this.messageService.add(mess);
    return of(CITIES);
  }

  getLocation(url:string){
    return this.http.get<any>(url);
  }

  gitSte(mess: string): void {
    this.messageService.add(mess);
  }

  logs(message: string): void{
    this.messageService.add('CityService: ' + message);
  }

  getWeatherInfo(name: string): Observable<Res> {
    this.messageService.add('Fetching weather from API');
    return this.http.get<Res>(name).pipe(catchError(this.handleError<Res>('get',{weather:[{main:'',description:''}],main:{temp_min:0,temp_max:0},id:0,name:'error connection to serve,check you connection'})));
  }
}

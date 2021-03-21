import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(Key: string):any{
    return JSON.parse(localStorage.getItem(Key));
  }

  setData(key : string, data : any){
    localStorage.setItem(key, JSON.stringify(data));
  }
}

import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angu-weather';
  isDarked = false;

  ngOnInit(){
    
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
  }

  setPosition(pos : String):void{
    console.log('dfd');
  }
}

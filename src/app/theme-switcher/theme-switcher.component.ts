import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  @Input() dark:boolean = false;
  @Output() isDark = new EventEmitter<boolean>();

  public theme: string;

  constructor() {}

  ngOnInit() {}

  public selectDarkTheme():void{
    this.dark = true;
    this.isDark.emit(this.dark);
    console.log(this.dark);
  }

  public selectLightTheme(): void {
    this.dark = false;
    this.isDark.emit(this.dark);
  }
}

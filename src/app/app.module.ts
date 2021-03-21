import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule } from '@angular/forms';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { GetPositionDirective } from './get-position.directive';
import { TodoLitComponent } from './todo-lit/todo-lit.component'; //<-- import ngModule
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule ,
    MatToolbarModule ,
    MatButtonModule ,
    MatButtonToggleModule ,
    MatFormFieldModule ,
    MatInputModule ,
    MatCheckboxModule } from '@angular/material';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CitySearchComponent,
    GetPositionDirective,
    TodoLitComponent,
    ThemeSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [TodoListService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

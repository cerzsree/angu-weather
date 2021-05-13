import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchCityComponent } from './search-city/search-city.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetPositionDirective } from './get-position.directive';
import { TodoLitComponent } from './todo-lit/todo-lit.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule ,
    MatToolbarModule ,
    MatButtonModule ,
    MatButtonToggleModule ,
    MatFormFieldModule ,
    MatInputModule ,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule} from '@angular/material';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Empty } from './empty.component';
import { DynamicTodoComponent } from './dynamic-todo/dynamic-todo.component';
import { WeatherInfoCardComponent } from './weather-info-card/weather-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    SearchCityComponent,
    GetPositionDirective,
    TodoLitComponent,
    ThemeSwitcherComponent,
    Empty,
    DynamicTodoComponent,
    WeatherInfoCardComponent,
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
    MatCheckboxModule,
    MatCardModule,
    DragDropModule,
    MatIconModule
  ],
  entryComponents: [ Empty ],
  providers: [TodoListService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

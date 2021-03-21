import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitySearchComponent } from './city-search/city-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'cities'    , component: CitiesComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'detail/:nm', component: CityDetailComponent },
  { path: 'search', component: CitySearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

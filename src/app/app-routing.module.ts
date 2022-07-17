import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { WeatherAppComponent } from './weather/weather-app/weather-app.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'weather', component: WeatherAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

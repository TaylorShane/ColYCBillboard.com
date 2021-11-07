import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from './pages/events/events.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path: 'main', component: WeatherComponent },
  { path: 'events', component: EventsComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

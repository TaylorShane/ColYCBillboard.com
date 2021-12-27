import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path: 'main', component: EventsComponent },
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

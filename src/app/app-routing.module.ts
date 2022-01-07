import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickEventsComponent } from './concepts/click-events/click-events.component';
import { InterpolationComponent } from './concepts/interpolation/interpolation.component';

const routes: Routes = [
  {
    path: 'click-events',
    component: ClickEventsComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

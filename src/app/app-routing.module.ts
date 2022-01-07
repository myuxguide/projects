import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickEventsComponent } from './concepts/click-events/click-events.component';
import { GetTextBoxValComponent } from './concepts/get-text-box-val/get-text-box-val.component';
import { InterpolationComponent } from './concepts/interpolation/interpolation.component';
import { NgIfComponent } from './concepts/ng-if/ng-if.component';
import { PropertyBindingComponent } from './concepts/property-binding/property-binding.component';
import { RoutingBasicsComponent } from './concepts/routing-basics/routing-basics.component';
import { DashboardComponent } from './concepts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'click-events',
    component: ClickEventsComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'get-text-box-val',
    component: GetTextBoxValComponent
  },
  {
    path: 'ng-if',
    component: NgIfComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'routing-basics',
    component: RoutingBasicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

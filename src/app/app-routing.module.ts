import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickEventsComponent } from './concepts/click-events/click-events.component';
import { GetTextBoxValComponent } from './concepts/get-text-box-val/get-text-box-val.component';
import { InterpolationComponent } from './concepts/interpolation/interpolation.component';
import { NgIfComponent } from './concepts/ng-if/ng-if.component';
import { PropertyBindingComponent } from './concepts/property-binding/property-binding.component';
import { RoutingBasicsComponent } from './concepts/routing-basics/routing-basics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgSwitchComponent } from './concepts/ng-switch/ng-switch.component'
import { NgForLoopComponent } from './concepts/ng-for-loop/ng-for-loop.component';
import { SimpleFormsComponent } from './concepts/reactiveConcepts/simple-forms/simple-forms.component';
import { FormValidationsComponent } from './concepts/reactiveConcepts/form-validations/form-validations.component';
import { AngCLIComponent } from './concepts/ang-cli/ang-cli.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full', // redirect to `first-component`
  },
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
    path: 'ng-switch',
    component: NgSwitchComponent
  },
  {
    path: 'ng-for-loop',
    component: NgForLoopComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'routing-basics',
    component: RoutingBasicsComponent
  },
  {
    path:'app-simple-forms',
    component: SimpleFormsComponent
  },
  {
    path: 'app-form-validations',
    component: FormValidationsComponent
  },
  {
    path: 'app-ang-cli ',
    component: AngCLIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

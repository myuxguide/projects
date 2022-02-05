import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickEventsComponent } from './concepts/click-events/click-events.component';
import { GetTextBoxValComponent } from './concepts/get-text-box-val/get-text-box-val.component';
import { InterpolationComponent } from './concepts/interpolation/interpolation.component';
import { NgIfComponent } from './concepts/ng-if/ng-if.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgSwitchComponent } from './concepts/ng-switch/ng-switch.component'
import { NgForLoopComponent } from './concepts/ng-for-loop/ng-for-loop.component';
import { SimpleFormsComponent } from './concepts/reactiveConcepts/simple-forms/simple-forms.component';
import { FormValidationsComponent } from './concepts/reactiveConcepts/form-validations/form-validations.component';
import { CliComponent } from './concepts/cli/cli.component';
import { ModuleComponent } from './concepts/module/module.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { ComponentsComponent } from './angular-architecture/components/components.component';
import { CounterComponent } from './concepts/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full', // redirect to `first-component`
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "login",
    component: LoginComponent
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
    path: 'app-cli',
    component: CliComponent
  },
  {
    path: 'app-module',
    component: ModuleComponent
  },
  {
    path: 'app-components',
    component: ComponentsComponent
  },
  {
    path: "app-counter",
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

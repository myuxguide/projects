import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules & Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';

// Custom Modules
import { UsersModule } from './users/users.module';
import { CypressPractModule } from './cypress-pract/cypress-pract.module';
import { AngularArchitectureModule } from './angular-architecture/angular-architecture.module';


import { InterpolationComponent } from './concepts/interpolation/interpolation.component';
import { ClickEventsComponent } from './concepts/click-events/click-events.component';
import { GetTextBoxValComponent } from './concepts/get-text-box-val/get-text-box-val.component';

import { NgIfComponent } from './concepts/ng-if/ng-if.component';
import { NgSwitchComponent } from './concepts/ng-switch/ng-switch.component';
import { NgForLoopComponent } from './concepts/ng-for-loop/ng-for-loop.component';
import { CliComponent } from './concepts/cli/cli.component';
import { ModuleComponent } from './concepts/module/module.component';
import { CounterComponent } from './concepts/counter/counter.component';
import { SimpleFormsComponent } from './concepts/reactiveConcepts/simple-forms/simple-forms.component';

import { ProgresscardComponent } from './dashboard/progresscard/progresscard.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoutingBasicsComponent,
    InterpolationComponent,
    ClickEventsComponent,
    GetTextBoxValComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForLoopComponent,
    CliComponent,
    ModuleComponent,
    CounterComponent,
    SimpleFormsComponent,
    ProgresscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AngularArchitectureModule,
    CypressPractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

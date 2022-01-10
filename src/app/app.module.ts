import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConceptsModule } from './concepts/concepts.module';
import { DashboardComponent } from './dashboard/dashboard.component';


// Custom Modules
import { UsersListModule } from './user-list/user-list.module';
import { CypressPractModule } from './cypress-pract/cypress-pract.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListModule,
    ConceptsModule,
    CypressPractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

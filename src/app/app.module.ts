import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules & Component
import { ConceptsModule } from './concepts/concepts.module';
import { DashboardComponent } from './dashboard/dashboard.component';


// Custom Modules
import { UsersModule } from './users/users.module';
import { CypressPractModule } from './cypress-pract/cypress-pract.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ConceptsModule,
    CypressPractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

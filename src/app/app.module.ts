import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConceptsModule } from './concepts/concepts.module';

// Custom Modules
import { UsersListModule } from './user-list/user-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListModule,
    ConceptsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

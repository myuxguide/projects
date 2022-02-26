import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ConceptsModule } from './concepts/concepts.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    ContactComponent,
    UserComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ConceptsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes =[
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-registration',
    component: RegistrationComponent
  }
  
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    LoginComponent,
    RegistrationComponent
  ]
})

export class UsersModule { }

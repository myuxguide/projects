import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AuthGuard } from './auth/auth.guard';
import { ConceptsPagesComponent } from './concepts/concepts-pages.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "",
    component: ConceptsPagesComponent
  },
  {
    path: "concepts",
    component: ConceptsPagesComponent
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",    
    component: LoginComponent    
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "architecture",
    component:ArchitectureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

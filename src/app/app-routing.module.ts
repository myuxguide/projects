import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ArchitectureComponent } from './concepts/architecture/architecture.component';
import { ConceptsPagesComponent } from './concepts/concepts-pages.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { FormsGlobalComponent } from './forms/forms-global/forms-global.component';


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
    path: "architecture",
    component: ArchitectureComponent
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
    path: "help",
    component: HelpComponent
  },
  {
    path: "forms-global",
    component: FormsGlobalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

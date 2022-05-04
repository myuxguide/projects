import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './angular-architecture/components/components.component';




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
    path: 'app-components',
    component: ComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

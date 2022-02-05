import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgresscardComponent } from './progresscard/progresscard.component';

const routes: Routes = [
  {
    path: 'app-progress',
    component: ProgresscardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

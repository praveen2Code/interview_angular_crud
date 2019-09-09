import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'update', component: FormComponent}
]

@NgModule({
  declarations: [DashboardComponent, FormComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,


  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { AdminComponent } from '../components/layouts/admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  DashboardComponent,
  AdminComponent
  ]
})
export class AdminModule { }

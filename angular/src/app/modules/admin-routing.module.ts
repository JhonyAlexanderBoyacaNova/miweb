import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/layouts/admin.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';

const routes: Routes = [
	{
		path:'',
		component: AdminComponent,
		children:[
			{ path:"app/panel", component:DashboardComponent}
		],
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

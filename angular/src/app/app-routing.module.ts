import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/web/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WebComponent } from './components/layouts/web/web.component';

const routes: Routes = [
	{
		path:'',
		component:WebComponent,
		children:[
			{path:'inicio',component:HomeComponent},
			{path:'acceso',component:LoginComponent}
		],
	},
	{path:'',redirectTo:'inicio', pathMatch:'full'},
	 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

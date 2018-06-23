import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { LoginValidComponent } from './login-valid/login-valid.component';

const routes: Routes = [
{
	path:'',
	component:HomeComponent
},
{
	path:'about',
	component:AboutComponent
},
{
	path:'login',
	component:LoginComponent
},
{
	path:'login2',
	component:Login2Component
},
{
	path:'login3',
	component:Login3Component
},
{
	path:'login4',
	component:LoginValidComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

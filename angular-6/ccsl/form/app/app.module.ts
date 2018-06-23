import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { LoginValidComponent } from './login-valid/login-valid.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
	LoginComponent,
	Login2Component,
	Login3Component,
	LoginValidComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './pages/main/components/footer/footer.component';
import { NavComponent } from './pages/main/components/nav/nav.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

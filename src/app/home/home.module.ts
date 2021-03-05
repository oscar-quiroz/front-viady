import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagesComponent } from './components/images/images.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [NavbarComponent, ImagesComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

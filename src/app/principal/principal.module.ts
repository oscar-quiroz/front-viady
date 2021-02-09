import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'

import { NavbarComponent } from './navbar/navbar.component';
import { ImagesComponent } from './images/images.component';




@NgModule({
  declarations: [NavbarComponent, ImagesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ImagesComponent
  ]
})
export class PrincipalModule { }

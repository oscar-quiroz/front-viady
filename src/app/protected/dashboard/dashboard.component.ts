import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  get user(){
    return this.loginService.user
  }

  constructor( private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/auth/login')
  }

}

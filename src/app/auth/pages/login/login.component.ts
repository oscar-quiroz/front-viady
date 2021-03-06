import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm: FormGroup = this.fb.group(
    {
      email:['', [Validators.required, Validators.minLength(5) ]],
      password: ['', [Validators.required, Validators.minLength(1) ]]
    }
  )

  constructor( private fb:FormBuilder,  private router:Router, private loginService:LoginService) {
  }

  ngOnInit(): void {
    
  }

  mensaje(){
  console.log(this.myForm.value)
  this.router.navigate(['/dashboard'])
}


  login(){

    console.log(this.myForm.value)
    const {email, password} = this.myForm.value;

    this.loginService.iniciarSesion( email, password)
    .subscribe(res => {
      if( res ) {
        this.router.navigateByUrl('/dashboard')
      }else{
// to do
      }
    })

    /**
     this.loginService.login(this.myForm.value['email'], this.myForm.value['password'])
     this.router.navigate(['/dashboard'])
     */

  }

}

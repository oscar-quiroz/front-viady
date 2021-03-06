import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user:User

  myForm: FormGroup = this.fb.group(
    {
      name:['', [Validators.required, Validators.minLength(5) ]],
      lastname: ['', [Validators.required, Validators.minLength(5) ]],
      day:['', [Validators.required,Validators.min(0), Validators.max(31) ]],
      month:[, [Validators.required, Validators.min(0), Validators.max(12) ]],  
      year:['', [Validators.required, Validators.min(1900) , Validators.max(2020)]] ,
      username: ['', [Validators.required, Validators.minLength(5) ]],
      email: ['', [Validators.required, Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
      password: ['', [Validators.required, Validators.minLength(5) ]]
    }
  )

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }


  mensaje(){
    this.user={
    name:this.myForm.get('name')?.value,
    lastname:this.myForm.get('lastname')?.value,
    date:{
        day:this.myForm.get('day')?.value,
        month:this.myForm.get('month')?.value,
        year:this.myForm.get('year')?.value,
     },
     username:this.myForm.get('username')?.value,
     email:this.myForm.get('email')?.value,
     password:this.myForm.get('password')?.value,
    }
    console.log(this.user)
    }


  validacion( input:string){
   return  this.myForm.controls[input].errors && this.myForm.controls[input].touched
  }
}

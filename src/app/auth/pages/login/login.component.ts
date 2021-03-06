import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  myForm: FormGroup = this.fb.group(
    {
      user:['', [Validators.required, Validators.minLength(5) ]],
      password: ['', [Validators.required, Validators.minLength(5) ]]
    }
  )

  constructor( private fb:FormBuilder) {
  }

  ngOnInit(): void {
  }

  mensaje(){
  console.log(this.myForm.value)
  }

}

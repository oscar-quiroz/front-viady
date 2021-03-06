import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, map, tap} from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _user!: any;


  get user(){
    return {...this._user};
  }

  constructor( private http:HttpClient ) { }


  login(email:string, password:string){
    const data = {email, password}

    return new Promise( resolve =>(

    this.http.post('/login', data)
    .subscribe( res => {
      console.log(res)

      if(res['ok']){
        console.log(res['token'])
        resolve(res)
      }else {
        console.log(res['message'])
        resolve(false)
      }
    })
    ));
  }


  iniciarSesion( email, password ){
    const data = {email, password}
    return this.http.post<any>('http://localhost:3000/login', data)
    .pipe(
      tap( res  => {
        if( res.ok ){
          this._user = {
            dni: res.resume.dni!,
            firstName: res.resume.firstName!,
            email: res.resume.email!
          }
        }
      
      }),
      map(res => res.ok),
      catchError( err => of(false))
    )
  }

  
}


/**
 * 
 *
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUserDetails(name, password){
    // get user details and check currect or not
    const jwb = this.http.post('http://localhost:3000/api/login/', {
      email : name,
      password : password
    })
    return (jwb);
  }

  userSignup(name,email,password){
    const jwb = this.http.post('http://localhost:3000/api/users/', {
      name : name,
      email : email,
      password : password,
    })
    return (jwb);
  }


  loggedin(){
    if (!localStorage.getItem('token')){
      return false;
    }
    else{
      return true;
    }
  }
}

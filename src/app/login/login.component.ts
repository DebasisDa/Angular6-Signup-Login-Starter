import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth : AuthService, private router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('token'))
   {
      this.router.navigate(['home']);
    }
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      localStorage.setItem('token',data['token']);
      this.router.navigate(['home']);
    }, error=>{
      alert('Invalid user id or name');
      this.router.navigate(['login']);
    })
  }
  }



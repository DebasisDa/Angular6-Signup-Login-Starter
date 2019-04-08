import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private Auth : AuthService, private router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('token'))
    {
       this.router.navigate(['home']);
     }
  }

  signUser(event){
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector('#username').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.Auth.userSignup(username,email,password).subscribe(data => {
      localStorage.setItem('token',data['token']);
      this.router.navigate(['home']);
    }, error=>{
      alert('Invalid user name or password or email');
      this.router.navigate(['signup']);
    })
  }

}

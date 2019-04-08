import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private Auth : AuthService, private router : Router) { 
  }

  canActivate(){
    if (this.Auth.loggedin()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
}

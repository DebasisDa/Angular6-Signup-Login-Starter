import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component'
import { SignupComponent } from './signup/signup.component'


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate : [AuthGuard]
  },
  {
  path: 'home',
  component: HomeComponent,
  canActivate : [AuthGuard]
  },
  {
  path: 'login',
  component: LoginComponent 
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

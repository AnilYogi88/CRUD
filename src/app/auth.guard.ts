import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // console.log(this.user.getUserLoggedIn());
      if (!this.user.getUserLoggedIn()) {
        this.router.navigate(['/']);
        return false;
      }
      return  true;
  }
}


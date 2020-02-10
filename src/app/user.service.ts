import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private loggedInUser: boolean;
  public userName: any;
  public password: any;

  constructor() {
    if (sessionStorage.getItem('loggedInUser')) {
      this.loggedInUser = true;
    } else {
      this.loggedInUser = false;
    }
  }

  setUserLoggedIn() {
   if (this.loggedInUser = true) {
    sessionStorage.setItem('loggedInUser', 'true');
   }
  }

  getUserLoggedIn() {
    // console.log(this.loggedInUser);
    return this.loggedInUser;
  }
}


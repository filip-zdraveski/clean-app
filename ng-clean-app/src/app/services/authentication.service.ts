import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Authorization} from '../Models/Enumeration/Authorization';
import {mockService} from "./mock.service";
import {User} from "../Models/Classes/User";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public isLoggedIn$: Subject<boolean> = new Subject();

  constructor(private mock: mockService,
              private router: Router) {
  }

  login(username, password) {
    let user: User = this.mock.login(username, password);
    localStorage.setItem('username', user.username);
    localStorage.setItem('authorization', user.authorization.toString());
    localStorage.setItem('loggedIn', 'true');
    this.isLoggedIn$.next(true);

  }

  logout() {
    if (!AuthenticationService.isLoggedIn()) {
      return;
    }
    localStorage.removeItem('username');
    localStorage.removeItem('authorization');
    localStorage.removeItem('loggedIn');
    this.isLoggedIn$.next(false);
    this.router.navigate(['/']).then(() => {
    });
  }

  public static isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
}

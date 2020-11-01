import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Authorization} from '../Models/Enumeration/Authorization';
import {mockService} from "./mock.service";
import {User} from "../Models/Classes/User";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../Models/Classes/LoginResponse";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public isLoggedIn$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient,
              private mock: mockService,
              private router: Router) {
  }

  login(username, password) {
    let user: User = this.mock.login(username, password);
    localStorage.setItem('username', user.username);
    localStorage.setItem('authorization', this.getAuthorizationString(user.authorization));
    localStorage.setItem('loggedIn', 'true');
    this.isLoggedIn$.next(true);
    this.router.navigate(['/']).then(() => {});
    return new Observable<LoginResponse> ().pipe(map(r=> this.mock.mockLoginResponse()));
  }

  getAuthorizationString(authorization: Authorization){
    if(authorization==Authorization.USER)
      return 'USER';
    else if(authorization==Authorization.ADMIN)
      return 'ADMIN';
    else if(authorization==Authorization.MODERATOR)
      return 'MODERATOR';
    else
      return 'VISITOR'
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

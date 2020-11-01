import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from '../Models/Classes/User';
import {LoginResponse} from "../Models/Classes/LoginResponse";
import {Authorization} from "../Models/Enumeration/Authorization";

@Injectable({
  providedIn: 'root'
})
export class mockService{
  constructor() {
  }
  getMockUsers(): Observable<User[]> {
    let users: User[] = [];
    users.push(this.getMockUser('John'));
    users.push(this.getMockUser('Doe'));
    users.push(this.getMockUser('Jane'));
    users.push(this.getMockUser('Doe'));
    users.push(this.getMockUser('Aang'));
    return of(users);
  }
  getMockUser(username: string): User {
    let userId = Math.round(Math.random() * 100);
    return new User(
      userId + '-firstName',
      userId + '-lastName',
      username,
      'password',
      userId + '-email',
      userId);
  }
  getMockUserByUserId(userId: number): User {
    return new User(
      userId + '-firstName',
      userId + '-lastName',
      userId + '-username',
      'password',
      userId + '-email',
      userId);
  }
  async delay() {
    await new Promise(resolve => setTimeout(() => resolve(), 150)).then(() => {});
  }

  mockLoginResponse(){
    return new LoginResponse('9999', '1234', Authorization.USER, true);
  }

  login(username: any, password: any) {
    return new User('firstName', 'lastName', username, password, 'john@doe.com',
      1, this.getAuthorizationEnum(username));
  }

  getAuthorizationEnum(username: string): Authorization{
    if(username=='user')
      return Authorization.USER;
    else if(username=='admin')
      return Authorization.ADMIN;
    else if(username=='moderator')
      return Authorization.MODERATOR;
    else
      return Authorization.VISITOR;
  }
}

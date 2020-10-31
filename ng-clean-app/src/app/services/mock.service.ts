import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from '../Models/Classes/User';

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

  login(username: any, password: any) {
    return new User('firstName', 'lastName', username, password, 'john@doe.com', 1, );
  }
}

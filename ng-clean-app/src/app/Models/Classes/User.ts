import {Authorization} from '../Enumeration/Authorization';

export class User {
  private userId: number;
  username: string;
  private firstName: string;
  private lastName: string;
  private password: string;
  authorization: Authorization;
  private email: string;
  private sex: string;
  private _imageUrl: string;

  constructor(firstName: string, lastName: string, username: string, password: string, email: string, userId?: number, authorization?: Authorization) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.userId = userId;
    this.authorization=authorization;
    this._imageUrl = 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png';
  }

  get imageUrl(): string {
    return this._imageUrl;
  }
}

import {Authorization} from '../Enumeration/Authorization';

export class LoginResponse {
  expiresIn: string;
  idToken: string;
  role: Authorization;
  valid: boolean;
  errorMessage: string;
  username: string;

  constructor(expiresIn: string, idToken: string, role: Authorization, valid: boolean, errorMessage?: string) {
    this.expiresIn = expiresIn;
    this.idToken = idToken;
    this.role = role;
    this.valid = valid;
    this.errorMessage = errorMessage;
  }
}

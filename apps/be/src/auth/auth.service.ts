import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signIn() {
    return "sign-in";
  }

  signUp() {
    return "sign-up";
  }
}

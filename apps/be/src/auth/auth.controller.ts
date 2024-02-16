import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("sign-in")
  signIn() {
    return this.authService.signIn();
  }

  @Post("sign-up")
  signUp() {
    return this.authService.signUp();
  }
}

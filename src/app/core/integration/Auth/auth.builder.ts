import { Builder } from 'builder-pattern';
import { AuthRequest } from '../../models/auth.model';

export class AuthBuilder {
  static build(user: string, pwd: string): AuthRequest {
    return Builder<AuthRequest>()
      .pwd(pwd)
      .user(user)
      .build();
  }
}
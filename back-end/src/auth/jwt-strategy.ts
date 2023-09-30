import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JWT_SECRET } from 'config';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET.secret,
    });
  }

  async validate(payload: any) {
    return { id: payload.id, email: payload.email };
  }
}

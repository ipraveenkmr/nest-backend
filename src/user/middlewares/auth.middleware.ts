import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/schemas/User.schema';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';

export interface ExpressRequest extends Request {
  user?: User;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    if (!req.headers['authorization']) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers['authorization'].split(' ')[1];

    try {
      const decode = verify(token, 'JWT_SECRET') as { email: string };
      const user = await this.userService.findByEmail(decode.email);
      req.user = user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}

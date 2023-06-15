import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
/*
we can use middlewere in another type that is called functional middleware.
for example:

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};
*/

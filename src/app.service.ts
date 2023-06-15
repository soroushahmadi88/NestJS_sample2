import { Injectable } from '@nestjs/common';

/*
@Injectable() decorator makes the class eligible for dependency injection,
which means that other services or components can inject this service into their own constructors and use its methods.
*/
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

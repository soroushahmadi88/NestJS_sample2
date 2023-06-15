import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//The @Controller decorator tells Nest to register the AppController class as a Nest controller.
@Controller()
export class AppController {
  //The constructor accepts an AppService instance, which is type-injected by Nest.
  constructor(private readonly appService: AppService) {}

  //The AppController class defines a single @Get() route handler which returns the result of the AppService.getHello() method.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

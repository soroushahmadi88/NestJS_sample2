import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { RolesModule } from './roles/roles.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './middlewere/logger/logger.middleware';

@Module({
  imports: [RolesModule, UsersModule, DatabaseModule],
  //controllers Array: which controllers use in this module
  controllers: [AppController, UsersController],
  /*
  providers Array: which providers use in this module
  Provider registration
  Now that we have defined a provider (UsersService), and we have a consumer of that service (UsersController),
  we need to register the service with Nest so that it can perform the injection.
  */
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'roles', method: RequestMethod.POST },
        //'roles/(.*)',
      )
      .forRoutes('roles', 'users');
    //we can import the RequestMethod enum to reference the desired request method type
    // .forRoutes({ path: 'roles', method: RequestMethod.GET })

    // we can apply middlewere for multiples routesshow
    // .forRoutes('roles','users');win

    /*
    if we use middlewere in functional type middleware we should use it as below.
    consumer
      .apply(logger)
      .forRoutes(CatsController);
    */
  }
}

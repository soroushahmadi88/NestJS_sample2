
import { Module, DynamicModule } from '@nestjs/common';
//import { createDatabaseProviders } from './database.providers';
//import { Connection } from './connection.provider';

@Module({
  providers: [], //Connection
})
export class DatabaseModule {
  //The forRoot() method may return a dynamic module either synchronously or asynchronously (i.e., via a Promise).
  static forRoot(entities = [], options?): DynamicModule {
    //const providers = createDatabaseProviders(options, entities);
    return {
      module: DatabaseModule,
      //providers: providers,
      //exports: providers,
    };
  }
}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
To create a Nest application instance, we use the core NestFactory class.
NestFactory exposes a few static methods that allow creating an application instance.
The create() method returns an application object, which fulfills the INestApplication interface.
This object provides a set of methods which are described in the coming chapters.
In the example below, we simply start up our HTTP listener on port 3000, which lets the application await inbound HTTP requests.
*/
async function bootstrap() {
  /*
  By default, if any error happens while creating the application your app will exit with the code 1.
  If you want to make it throw an error instead disable the option abortOnError
  const app = await NestFactory.create(AppModule, { abortOnError: false }).

  To use specific platform you can pass a type (NestExpressApplication or NestFastifyApplication )
  to the NestFactory.create() method. for example:
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app object will have methods available exclusively for that specific platform.
  */
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

// call bootstrap function to run application
bootstrap();

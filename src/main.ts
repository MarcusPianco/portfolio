import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as config from 'config';
async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  const port = serverConfig.port;
  await app.listen(port);
}
bootstrap();

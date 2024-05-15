import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerConfig } from './logger/logger.config';
import * as winston from 'winston';


async function bootstrap() {
  const app = await NestFactory.create(AppModule , {
    logger: ['error', 'warn', 'debug', 'verbose', 'log']
  });
  
  app.useLogger(loggerConfig);

  await app.listen(3000);
}
bootstrap();

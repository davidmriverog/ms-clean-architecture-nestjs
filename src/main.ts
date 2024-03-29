import {
  BadRequestException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { STATUS_CODES } from 'http';
import { HttpExceptionFilter, HttpResult } from '@libs/infra';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory(errors) {
        const errMgs = errors.map(
          (error) => error.constraints[Object.keys(error.constraints)[0]],
        );

        return new BadRequestException(<HttpResult<any[]>>{
          status: STATUS_CODES[HttpStatus.BAD_REQUEST],
          message: 'Validation Errors',
          error: errMgs,
        });
      },
      stopAtFirstError: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(8080);
}
bootstrap();

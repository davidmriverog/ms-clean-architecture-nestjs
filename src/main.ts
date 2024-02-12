import { BadRequestException, ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from '@libs/infra';

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

        return new BadRequestException({
          code: 'validation.field_errors',
          message: 'Hemos detectado campos con faltantes o con errores',
          errors: errMgs,
        });
      },
      stopAtFirstError: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(8080);
}
bootstrap();

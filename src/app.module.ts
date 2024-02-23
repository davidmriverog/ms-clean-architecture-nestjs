import { APP_PIPE } from '@nestjs/core';
import { MainModule } from '@modules/modules.module';
import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@libs/infra';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MainModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
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
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}

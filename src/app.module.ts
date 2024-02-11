import {
  DatabaseModule,
  EntityRepository,
  TypeORMPostgresRepository,
} from '@libs/infra';
import { MainModule } from '@modules/modules.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

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
      provide: EntityRepository,
      useClass: TypeORMPostgresRepository,
    },
  ],
  exports: [
    {
      provide: EntityRepository,
      useClass: TypeORMPostgresRepository,
    },
  ],
})
export class AppModule {}

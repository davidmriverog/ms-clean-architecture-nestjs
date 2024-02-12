import { DatabaseModule } from '@libs/infra';
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
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { RoleModule } from './roles/role.module';

@Module({
  imports: [RoleModule],
})
export class MainModule {}

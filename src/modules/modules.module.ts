import { Module } from '@nestjs/common';
import { RoleModule } from './roles/role.module';
import { PermissionModule } from './permission/infrastructure/permission.module';

@Module({
  imports: [RoleModule, PermissionModule],
})
export class MainModule {}

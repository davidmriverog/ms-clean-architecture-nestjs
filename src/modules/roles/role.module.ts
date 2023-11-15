import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database';

import { RoleController } from './insfrastructure/controllers/role.controller';
import { RoleMapper } from './insfrastructure/mappers/role.mapper';
import { RoleService } from './insfrastructure/services/role.service';

import { ROLE_USE_CASES } from './insfrastructure/providers/role-usecase.provider';
import { ROLE_REPOSITORY_PROVIDER } from './insfrastructure/providers/role.provider';
import { ROLE_PORT_PROVIDER } from './insfrastructure/providers/role-port.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [
    ...ROLE_USE_CASES,
    ...ROLE_REPOSITORY_PROVIDER,
    ...ROLE_PORT_PROVIDER,
    RoleMapper,
    RoleService,
  ],
  exports: [
    ...ROLE_USE_CASES,
    ...ROLE_REPOSITORY_PROVIDER,
    ...ROLE_PORT_PROVIDER,
    RoleMapper,
    RoleService,
  ],
})
export class RoleModule {}

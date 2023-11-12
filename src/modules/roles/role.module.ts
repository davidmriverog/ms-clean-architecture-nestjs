import { Module } from '@nestjs/common';
import { DatabaseModule } from '@databases/database.module';
import { RoleController } from './insfrastructure/controllers/role.controller';
import {
  ROLE_ADAPTER_PORT,
  RoleProvider,
} from './insfrastructure/adapters/persistence/role.provider';
import { RoleAdapterPort } from './insfrastructure/adapters/role.adapter';
import { RoleFindAllUseCase } from './application/use-case/role-find-all.uc';
import { RoleMapper } from './insfrastructure/mappers/role.mapper';
import { RoleService } from './insfrastructure/services/role.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [
    ...RoleProvider,
    {
      provide: ROLE_ADAPTER_PORT,
      useClass: RoleAdapterPort,
    },
    RoleMapper,
    RoleFindAllUseCase,
    RoleService,
  ],
  exports: [
    ...RoleProvider,
    {
      provide: ROLE_ADAPTER_PORT,
      useClass: RoleAdapterPort,
    },
    RoleMapper,
    RoleFindAllUseCase,
    RoleService,
  ],
})
export class RoleModule {}

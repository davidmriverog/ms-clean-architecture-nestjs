import { Module } from '@nestjs/common';
import { DatabaseModule } from '@databases/database.module';
import { RoleController } from './insfrastructure/controllers/role.controller';
import { RoleProvider } from './insfrastructure/adapters/persistence/role.provider';
import { RoleAdapterPort } from './insfrastructure/adapters/role.adapter';
import { RoleMapper } from './insfrastructure/mappers/role.mapper';
import { RoleService } from './insfrastructure/services/role.service';
import { RoleProviderEnum } from './core/role-provider.enum';
import { RoleGetAllUseCase } from './application/use-case/role-getAll.uc';

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [
    ...RoleProvider,
    {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useClass: RoleAdapterPort,
    },
    RoleMapper,
    RoleGetAllUseCase,
    RoleService,
  ],
  exports: [
    ...RoleProvider,
    {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useClass: RoleAdapterPort,
    },
    RoleMapper,
    RoleGetAllUseCase,
    RoleService,
  ],
})
export class RoleModule {}

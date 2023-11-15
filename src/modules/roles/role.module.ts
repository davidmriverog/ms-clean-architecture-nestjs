import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database';

import { RoleController } from './insfrastructure/controllers/role.controller';
import { RoleProvider } from './insfrastructure/adapters/persistence/role.provider';
import { RoleAdapterPort } from './insfrastructure/adapters/role.adapter';
import { RoleMapper } from './insfrastructure/mappers/role.mapper';
import { RoleService } from './insfrastructure/services/role.service';
import { RoleProviderEnum } from './domain/enums/role-provider.enum';
import { RoleUseCaseEnum } from './domain/enums/role-usecase.enum';

import { RoleGetAllUseCase } from './application/use-case/role-getAll.uc';
import { RoleNewUseCase } from './application/use-case/role-new.uc';
import { RoleEditUseCase } from './application/use-case/role-edit.uc';
import { RoleRemoveUseCase } from './application/use-case/role-remove.uc';

const ROLE_USE_CASES = [
  {
    provide: RoleUseCaseEnum.ROLE_GET_ALL,
    useClass: RoleGetAllUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_NEW,
    useClass: RoleNewUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_EDIT,
    useClass: RoleEditUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_REMOVE,
    useClass: RoleRemoveUseCase,
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [
    ...RoleProvider,
    ...ROLE_USE_CASES,
    {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useClass: RoleAdapterPort,
    },
    RoleMapper,
    RoleService,
  ],
  exports: [
    ...RoleProvider,
    ...ROLE_USE_CASES,
    {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useClass: RoleAdapterPort,
    },
    RoleMapper,
    RoleService,
  ],
})
export class RoleModule {}

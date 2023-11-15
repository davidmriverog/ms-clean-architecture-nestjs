import { DataSource } from 'typeorm';
import { RoleEntity } from '../adapters/persistence/role.entity';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';

export const ROLE_REPOSITORY_PROVIDER = [
  {
    provide: RoleProviderEnum.ROLE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RoleEntity),
    inject: [DataSource],
  },
];

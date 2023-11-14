import { DataSource } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';

export const RoleProvider = [
  {
    provide: RoleProviderEnum.ROLE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RoleEntity),
    inject: [DataSource],
  },
];

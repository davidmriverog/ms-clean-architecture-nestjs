import { DataSource } from 'typeorm';
import { Role } from '../entities/role.entity';
import { RoleProviderEnum } from '../../domain/enums/role-provider.enum';

export const ROLE_REPOSITORY_PROVIDER = [
  {
    provide: RoleProviderEnum.ROLE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
    inject: [DataSource],
  },
];

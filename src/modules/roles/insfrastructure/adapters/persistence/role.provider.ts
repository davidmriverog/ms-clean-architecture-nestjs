import { DataSource } from 'typeorm';
import { RoleEntity } from './role.entity';

export const ROLE_REPOSITORY = 'ROLE_REPOSITORY';

export const RoleProvider = [
  {
    provide: ROLE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RoleEntity),
    inject: [DataSource],
  },
];

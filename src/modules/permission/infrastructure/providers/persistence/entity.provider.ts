import { DataSource } from 'typeorm';

import { PERMISSION_ENTITY } from '../../../domain/consts/permission.const';
import { Permission } from '../../persistence/permission.entity';

export const PERMISSION_ENTITY_PROVIDER = [
  {
    provide: PERMISSION_ENTITY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Permission),
    inject: [DataSource],
  },
];

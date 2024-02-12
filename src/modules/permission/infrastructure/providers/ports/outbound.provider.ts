import { Provider } from '@nestjs/common';

import { PermissionAdapter } from '../../adapters/permission.adapter';
import { PERMISSION_REPOSITORY } from '../../../domain/consts/permission.const';

export const PERMISSION_PORT_PROVIDERS = [
  {
    provide: PERMISSION_REPOSITORY,
    useClass: PermissionAdapter,
  },
] as Provider[];

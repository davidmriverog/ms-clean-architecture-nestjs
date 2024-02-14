import { Provider } from '@nestjs/common';

import { PERMISSION_PORT } from '../../../domain/consts/permission.const';
import { PermissionPortAdapter } from '../../adapters/permission.adapter';

export const PERMISSION_PORT_PROVIDERS = [
  {
    provide: PERMISSION_PORT,
    useClass: PermissionPortAdapter,
  },
] as Provider[];

import { Provider } from '@nestjs/common';

import { PERMISSION_SERVICE } from '../../../domain/consts/permission.const';
import { PermissionDomainService } from '../../../domain/service/permission.service';

export const PERMISSION_SERVICE_PROVIDERS = [
  {
    provide: PERMISSION_SERVICE,
    useClass: PermissionDomainService,
  },
] as Provider[];

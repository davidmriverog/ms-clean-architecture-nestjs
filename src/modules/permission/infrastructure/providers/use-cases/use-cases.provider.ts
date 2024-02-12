import { Provider } from '@nestjs/common';

import { GetAllPermissionUseCase } from '../../../application/getAll.uc';
import { GetByIdPermissionUseCase } from '../../../application/getById.uc';

export const USE_CASES_PROVIDERS = [
  GetAllPermissionUseCase,
  GetByIdPermissionUseCase,
] as Provider[];

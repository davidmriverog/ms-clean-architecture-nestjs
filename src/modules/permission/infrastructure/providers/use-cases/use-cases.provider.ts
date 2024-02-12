import { Provider } from '@nestjs/common';

import { GetAllPermissionUseCase } from '../../../application/getAll.uc';
import { GetByIdPermissionUseCase } from '../../../application/getById.uc';
import { CreatePermissionUseCase } from '../../../application/create.uc';
import { UpdatePermissionUseCase } from '../../../application/update.uc';
import { RemovePermissionUseCase } from '../../../application/remove.uc';

export const USE_CASES_PROVIDERS = [
  GetAllPermissionUseCase,
  GetByIdPermissionUseCase,
  CreatePermissionUseCase,
  UpdatePermissionUseCase,
  RemovePermissionUseCase,
] as Provider[];

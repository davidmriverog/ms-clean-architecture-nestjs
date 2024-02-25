import { Provider } from '@nestjs/common';

import { GetAllPermissionUseCase } from '../../../application/use-cases/getAll-permission.uc';
import { GetByIdPermissionUseCase } from '../../../application/use-cases/getById-permission.uc';
import { CreatePermissionUseCase } from '../../../application/use-cases/create-permission.uc';
import { UpdatePermissionUseCase } from '../../../application/use-cases/update-permission.uc';
import { RemovePermissionUseCase } from '../../../application/use-cases/remove-permission.uc';

export const USE_CASES_PROVIDERS = [
  GetAllPermissionUseCase,
  GetByIdPermissionUseCase,
  CreatePermissionUseCase,
  UpdatePermissionUseCase,
  RemovePermissionUseCase,
] as Provider[];

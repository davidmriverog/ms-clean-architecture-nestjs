import { Provider } from '@nestjs/common';

import { GetAllPermissionUseCase } from '../../../application/use-cases/getAll.uc';
import { GetByIdPermissionUseCase } from '../../../application/use-cases/getById.uc';
import { CreatePermissionUseCase } from '../../../application/use-cases/create.uc';
import { UpdatePermissionUseCase } from '../../../application/use-cases/update.uc';
import { RemovePermissionUseCase } from '../../../application/use-cases/remove.uc';

export const USE_CASES_PROVIDERS = [
  GetAllPermissionUseCase,
  GetByIdPermissionUseCase,
  CreatePermissionUseCase,
  UpdatePermissionUseCase,
  RemovePermissionUseCase,
] as Provider[];

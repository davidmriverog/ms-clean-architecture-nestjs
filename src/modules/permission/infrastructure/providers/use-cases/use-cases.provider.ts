import { Provider } from '@nestjs/common';

import { GetAllPermissionUseCase } from '../../../application/getAll.uc';

export const USE_CASES_PROVIDERS = [GetAllPermissionUseCase] as Provider[];

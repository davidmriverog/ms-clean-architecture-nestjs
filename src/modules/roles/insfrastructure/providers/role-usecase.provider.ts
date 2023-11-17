import { RoleUseCaseEnum } from '@modules/roles/domain/enums/role-usecase.enum';

import { RoleGetAllUseCase } from '@modules/roles/application/use-case/role-getAll.uc';
import { RoleFindByIdUseCase } from '@modules/roles/application/use-case/role-findById.uc';
import { RoleNewUseCase } from '@modules/roles/application/use-case/role-new.uc';
import { RoleEditUseCase } from '@modules/roles/application/use-case/role-edit.uc';
import { RoleRemoveUseCase } from '@modules/roles/application/use-case/role-remove.uc';

export const ROLE_USE_CASES = [
  {
    provide: RoleUseCaseEnum.ROLE_FIND_BY_ID,
    useClass: RoleFindByIdUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_GET_ALL,
    useClass: RoleGetAllUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_NEW,
    useClass: RoleNewUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_EDIT,
    useClass: RoleEditUseCase,
  },
  {
    provide: RoleUseCaseEnum.ROLE_REMOVE,
    useClass: RoleRemoveUseCase,
  },
];

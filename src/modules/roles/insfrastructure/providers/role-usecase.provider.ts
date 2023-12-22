import { RoleUseCaseEnum } from '@modules/roles/domain/enums/role-usecase.enum';

import { RoleGetAllUseCase } from '@modules/roles/application/find/role-getAll.uc';
import { RoleFindByIdUseCase } from '@modules/roles/application/find/role-findById.uc';
import { RoleCreateUseCase } from '@modules/roles/application/create/role-create.uc';
import { RoleEditUseCase } from '@modules/roles/application/edit/role-edit.uc';
import { RoleRemoveUseCase } from '@modules/roles/application/remove/role-remove.uc';

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
    provide: RoleUseCaseEnum.ROLE_CREATE,
    useClass: RoleCreateUseCase,
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

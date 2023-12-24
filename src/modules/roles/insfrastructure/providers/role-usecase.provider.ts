import { RoleUseCaseEnum } from '../../domain/enums/role-usecase.enum';

import { RoleGetAllUseCase } from '../../application/find/role-getAll.uc';
import { RoleFindByIdUseCase } from '../../application/find/role-findById.uc';
import { RoleCreateUseCase } from '../../application/create/role-create.uc';
import { RoleEditUseCase } from '../../application/edit/role-edit.uc';
import { RoleRemoveUseCase } from '../../application/remove/role-remove.uc';

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

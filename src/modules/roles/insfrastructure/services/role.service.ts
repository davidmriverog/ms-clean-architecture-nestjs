import { Inject, Injectable } from '@nestjs/common';

import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleUseCaseEnum } from '@modules/roles/domain//enums/role-usecase.enum';
import { AbstractService } from '@shared/infrastructure/service/abstract-service.service';
import { RoleGetAllUseCase } from '@modules/roles/application/use-case/role-getAll.uc';
import { RoleFindByIdUseCase } from '@modules/roles/application/use-case/role-findById.uc';
import { RoleCreateUseCase } from '@modules/roles/application/use-case/role-create.uc';
import { RoleEditUseCase } from '@modules/roles/application/use-case/role-edit.uc';
import { RoleRemoveUseCase } from '@modules/roles/application/use-case/role-remove.uc';

@Injectable()
export class RoleService extends AbstractService<RoleBO> {
  constructor(
    @Inject(RoleUseCaseEnum.ROLE_GET_ALL)
    private readonly findAllRoleUseCase: RoleGetAllUseCase,
    @Inject(RoleUseCaseEnum.ROLE_FIND_BY_ID)
    private readonly findByIdRoleUseCase: RoleFindByIdUseCase,
    @Inject(RoleUseCaseEnum.ROLE_CREATE)
    private readonly createRoleUseCase: RoleCreateUseCase,
    @Inject(RoleUseCaseEnum.ROLE_EDIT)
    private readonly editRoleUseCase: RoleEditUseCase,
    @Inject(RoleUseCaseEnum.ROLE_REMOVE)
    private readonly removeRoleUseCase: RoleRemoveUseCase,
  ) {
    super(
      findAllRoleUseCase,
      findByIdRoleUseCase,
      createRoleUseCase,
      editRoleUseCase,
      removeRoleUseCase,
    );
  }

  // Other Implements!
}

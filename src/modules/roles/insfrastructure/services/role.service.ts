import { Inject, Injectable } from '@nestjs/common';
import { RoleUseCaseEnum } from '@modules/roles/domain//enums/role-usecase.enum';

import { IRoleGetAllUseCase } from '@modules/roles/domain/use-cases/role-getAll.interface';
import { IRoleNewUseCase } from '@modules/roles/domain/use-cases/role-new.interface';
import { IRoleEditUseCase } from '@modules/roles/domain/use-cases/role-edit.interface';
import { IRoleRemoveUseCase } from '@modules/roles/domain/use-cases/role-remove.interface';

@Injectable()
export class RoleService {
  constructor(
    @Inject(RoleUseCaseEnum.ROLE_GET_ALL)
    private readonly roleGetAllUseCase: IRoleGetAllUseCase,
    @Inject(RoleUseCaseEnum.ROLE_NEW)
    private readonly roleNewUseCase: IRoleNewUseCase,
    @Inject(RoleUseCaseEnum.ROLE_EDIT)
    private readonly roleEditUseCase: IRoleEditUseCase,
    @Inject(RoleUseCaseEnum.ROLE_REMOVE)
    private readonly roleRemoveUseCase: IRoleRemoveUseCase,
  ) {}

  async getAll() {
    return await this.roleGetAllUseCase.execute();
  }

  async create(attrs) {
    return await this.roleNewUseCase.execute(attrs);
  }

  async update(id, attrs) {
    return await this.roleEditUseCase.execute(id, attrs);
  }

  async remove(id) {
    return await this.roleRemoveUseCase.execute(id);
  }
}

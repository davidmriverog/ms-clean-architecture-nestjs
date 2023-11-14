import { Inject, Injectable } from '@nestjs/common';
import { RoleUseCaseEnum } from '@modules/roles/domain//enums/role-usecase.enum';
import { IRoleGetAllUseCase } from '@modules/roles/domain/use-cases/role-getAll.interface';
import { IRoleNewUseCase } from '@modules/roles/domain/use-cases/role-new.interface';

@Injectable()
export class RoleService {
  constructor(
    @Inject(RoleUseCaseEnum.ROLE_GET_ALL)
    private readonly roleGetAllUseCase: IRoleGetAllUseCase,
    @Inject(RoleUseCaseEnum.ROLE_NEW)
    private readonly roleNewUseCase: IRoleNewUseCase,
  ) {}

  async getAll() {
    return await this.roleGetAllUseCase.execute();
  }

  async create(attrs) {
    return await this.roleNewUseCase.execute(attrs);
  }
}

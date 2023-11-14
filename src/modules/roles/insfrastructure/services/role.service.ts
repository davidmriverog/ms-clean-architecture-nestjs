import { Inject, Injectable } from '@nestjs/common';
import { RoleUseCaseEnum } from '@modules/roles/core/enums/role-usecase.enum';
import { IRoleGetAllUseCase } from '@modules/roles/core/use-cases/role-getAll.interface';

@Injectable()
export class RoleService {
  constructor(
    @Inject(RoleUseCaseEnum.ROLE_GET_ALL)
    private readonly roleGetAllUseCase: IRoleGetAllUseCase,
  ) {}

  async getAll() {
    return await this.roleGetAllUseCase.execute();
  }
}

import { RoleGetAllUseCase } from '@modules/roles/application/use-case/role-getAll.uc';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  constructor(private readonly roleGetAllUseCase: RoleGetAllUseCase) {}

  async getAll() {
    return await this.roleGetAllUseCase.execute();
  }
}

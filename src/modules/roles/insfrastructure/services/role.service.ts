import { RoleFindAllUseCase } from '@modules/roles/application/use-case/role-find-all.uc';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  constructor(private readonly getAllRoleUseCase: RoleFindAllUseCase) {}

  async getAll() {
    return await this.getAllRoleUseCase.execute();
  }
}

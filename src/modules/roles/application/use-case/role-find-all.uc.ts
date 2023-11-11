import { Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { GetAllRolesUseCase } from '@modules/roles/core/use-cases/role-find-all.interface';
import { RoleBO } from '@modules/roles/core/domain/role.bo';

@Injectable()
export class RoleFindAllUseCase implements GetAllRolesUseCase<RoleBO> {
  constructor(private readonly rolePort: RolePort) {}

  async execute(): Promise<RoleBO[]> {
    return await this.rolePort.findAll();
  }
}

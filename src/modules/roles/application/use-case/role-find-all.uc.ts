import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { GetAllRolesUseCase } from '@modules/roles/core/use-cases/role-find-all.interface';
import { RoleBO } from '@modules/roles/core/domain/role.bo';
import { ROLE_ADAPTER_PORT } from '@modules/roles/insfrastructure/adapters/persistence/role.provider';

@Injectable()
export class RoleFindAllUseCase implements GetAllRolesUseCase<RoleBO> {
  constructor(
    @Inject(ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(): Promise<RoleBO[]> {
    return await this.rolePort.findAll();
  }
}

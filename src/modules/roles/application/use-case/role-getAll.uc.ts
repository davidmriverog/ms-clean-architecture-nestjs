import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/core/role.bo';
import { RoleProviderEnum } from '@modules/roles/core/enums/role-provider.enum';
import { IRoleGetAllUseCase } from '@modules/roles/core/use-cases/role-getAll.interface';

@Injectable()
export class RoleGetAllUseCase implements IRoleGetAllUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(): Promise<RoleBO[]> {
    return await this.rolePort.findAll();
  }
}

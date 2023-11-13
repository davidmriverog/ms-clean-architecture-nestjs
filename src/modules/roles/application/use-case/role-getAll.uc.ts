import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/core/role.bo';
import { RoleProviderEnum } from '@modules/roles/core/role-provider.enum';

@Injectable()
export class RoleGetAllUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(): Promise<RoleBO[]> {
    return await this.rolePort.findAll();
  }
}

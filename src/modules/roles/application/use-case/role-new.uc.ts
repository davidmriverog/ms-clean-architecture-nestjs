import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/domainrole.bo';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { IRoleNewUseCase } from '@modules/roles/domainuse-cases/role-new.interface';

@Injectable()
export class RoleNewUseCase implements IRoleNewUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(attrs: any): Promise<RoleBO> {
    const result = await this.rolePort.transaction(async (transaction) => {
      return await this.rolePort.create(attrs, transaction);
    });

    return result;
  }
}

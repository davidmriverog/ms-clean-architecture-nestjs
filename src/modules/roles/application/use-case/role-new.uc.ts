import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';

import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';
import { IRoleNewUseCase } from '@modules/roles/domain/use-cases/role-new.interface';

@Injectable()
export class RoleNewUseCase implements IRoleNewUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(attrs: RoleDto): Promise<RoleBO> {
    const result: RoleBO = await this.rolePort.transaction(
      async (transaction) => {
        return await this.rolePort.create(attrs, transaction);
      },
    );

    return result;
  }
}

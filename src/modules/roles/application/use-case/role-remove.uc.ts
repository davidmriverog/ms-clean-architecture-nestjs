import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { IRoleRemoveUseCase } from '@modules/roles/domain/use-cases/role-remove.interface';

@Injectable()
export class RoleRemoveUseCase implements IRoleRemoveUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(id: number): Promise<boolean> {
    return this.rolePort.transaction(async (transaction) => {
      return await this.rolePort.remove(id, transaction);
    });
  }
}

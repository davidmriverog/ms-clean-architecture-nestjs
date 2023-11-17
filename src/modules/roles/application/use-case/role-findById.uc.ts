import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@shared/infrastructure/Result';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { IRoleFindByIdUseCase } from '@modules/roles/domain/use-cases/role-findById.interface';

@Injectable()
export class RoleFindByIdUseCase implements IRoleFindByIdUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(id: number): Promise<Result<RoleBO>> {
    return await this.rolePort.findById(id);
  }
}

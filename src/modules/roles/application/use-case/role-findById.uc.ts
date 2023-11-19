import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@shared/infrastructure/Result';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { IFindByIdUseCase } from '@shared/domain/use-cases/findById.usecase';

@Injectable()
export class RoleFindByIdUseCase implements IFindByIdUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(id: number): Promise<Result<RoleBO>> {
    return await this.rolePort.findById(id);
  }
}

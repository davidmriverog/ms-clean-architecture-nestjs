import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';
import { Result } from '@shared/infrastructure/Result';
import { IFindAllUseCase } from '@shared/domain/use-cases/findAll.usecase';

@Injectable()
export class RoleGetAllUseCase implements IFindAllUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(): Promise<Result<RoleBO[]>> {
    return await this.rolePort.findAll();
  }
}

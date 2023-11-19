import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@shared/infrastructure/Result';
import { ICreateUseCase } from '@shared/domain/use-cases/create.usecase';

import { RolePort } from '../ports/role.port';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';

import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';

@Injectable()
export class RoleCreateUseCase implements ICreateUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(attrs: RoleDto): Promise<Result<RoleBO | string>> {
    const result = await this.rolePort.transaction(async (transaction) => {
      return await this.rolePort.create(attrs, transaction);
    });

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success<RoleBO>(result.value as RoleBO);
  }
}

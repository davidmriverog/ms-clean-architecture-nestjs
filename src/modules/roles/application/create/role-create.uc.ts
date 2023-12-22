import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { ICreateUseCase } from '@libs/app';

import { RoleRepository } from '../../domain/ports/role.repository';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';

import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';

@Injectable()
export class RoleCreateUseCase implements ICreateUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(attrs: RoleDto): Promise<Result<RoleBO | string>> {
    const result = await this.roleRepository.transaction(
      async (transaction) => {
        return await this.roleRepository.create(attrs, transaction);
      },
    );

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success<RoleBO>(result.value as RoleBO);
  }
}

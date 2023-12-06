import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { IRemoveUseCase, ResultTransaction } from '@libs/app';

import { RoleRepository } from '../ports/role.repository';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';

@Injectable()
export class RoleRemoveUseCase implements IRemoveUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(id: number): Promise<Result<ResultTransaction | string>> {
    const result: Result<ResultTransaction> =
      await this.roleRepository.transaction(async (transaction) => {
        return await this.roleRepository.remove(id, transaction);
      });

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success(result.value);
  }
}

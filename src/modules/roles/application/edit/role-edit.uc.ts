import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { IEditUseCase, ResultTransaction } from '@libs/app';

import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { RoleRepository } from '../../domain/ports/role.repository';

@Injectable()
export class RoleEditUseCase implements IEditUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(
    id: number,
    attrs: RoleDto,
  ): Promise<Result<string | ResultTransaction>> {
    const result: Result<ResultTransaction> =
      await this.roleRepository.transaction(async (transaction) => {
        return await this.roleRepository.update(id, attrs, transaction);
      });

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success(result.value);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { IEditUseCase } from '@libs/app';
import { ResultTransaction } from '@libs/business';

import { RoleDto } from './../../domain/dto/role.dto';
import { RoleRepository } from '../../domain/ports/role.repository';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';

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

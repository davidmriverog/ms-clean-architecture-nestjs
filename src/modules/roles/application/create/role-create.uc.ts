import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { ICreateUseCase } from '@libs/app';

import { RoleBO } from './../../domain/role.bo';
import { RoleDto } from './../../domain/dto/role.dto';
import { RoleRepository } from '../../domain/ports/role.repository';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';

@Injectable()
export class RoleCreateUseCase implements ICreateUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(attrs: RoleDto): Promise<Result<RoleBO | string>> {
    const result = await this.roleRepository.create(attrs);

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success<RoleBO>(result.value as RoleBO);
  }
}

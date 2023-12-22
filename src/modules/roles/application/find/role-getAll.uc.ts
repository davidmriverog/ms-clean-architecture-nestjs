import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { IFindAllUseCase } from '@libs/app';

import { RoleRepository } from '../../domain/ports/role.repository';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';

@Injectable()
export class RoleGetAllUseCase implements IFindAllUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(): Promise<Result<RoleBO[]>> {
    return await this.roleRepository.findAll();
  }
}

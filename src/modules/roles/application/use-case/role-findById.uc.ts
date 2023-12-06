import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { IFindByIdUseCase } from '@libs/app';

import { RoleRepository } from '../ports/role.repository';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';

@Injectable()
export class RoleFindByIdUseCase implements IFindByIdUseCase<RoleBO> {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(id: number): Promise<Result<RoleBO>> {
    return await this.roleRepository.findById(id);
  }
}

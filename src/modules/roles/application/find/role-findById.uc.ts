import { Inject, Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { IFindByIdUseCase } from '@libs/app';

import { RoleBO } from './../../domain/role.bo';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';

import { RoleRepository } from '../../domain/ports/role.repository';

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

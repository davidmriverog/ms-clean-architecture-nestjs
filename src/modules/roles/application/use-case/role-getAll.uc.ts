import { Inject, Injectable } from '@nestjs/common';
import { RoleRepository } from '../ports/role.repository';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';
import { Result } from '@shared/infrastructure/Result';
import { IFindAllUseCase } from '@shared/domain/use-cases/findAll.usecase';

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

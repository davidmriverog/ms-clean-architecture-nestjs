import { Inject, Injectable } from '@nestjs/common';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { IRoleEditUseCase } from '@modules/roles/domain/use-cases/role-edit.interface';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { RolePort } from '../ports/role.port';

@Injectable()
export class RoleEditUseCase implements IRoleEditUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(id: number, attrs: RoleDto): Promise<boolean> {
    const result: boolean = await this.rolePort.transaction(async (tr) => {
      return await this.rolePort.update(id, attrs, tr);
    });

    return result;
  }
}

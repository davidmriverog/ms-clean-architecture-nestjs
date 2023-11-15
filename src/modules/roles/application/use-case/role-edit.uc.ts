import { Inject, Injectable } from '@nestjs/common';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { IRoleEditUseCase } from '@modules/roles/domain/use-cases/role-edit.interface';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { RolePort } from '../ports/role.port';
import { Result } from '@shared/infrastructure/Result';

@Injectable()
export class RoleEditUseCase implements IRoleEditUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(id: number, attrs: RoleDto): Promise<Result<string | boolean>> {
    const result = await this.rolePort.transaction(async (tr) => {
      return await this.rolePort.update(id, attrs, tr);
    });

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success<boolean>(result.value as boolean);
  }
}

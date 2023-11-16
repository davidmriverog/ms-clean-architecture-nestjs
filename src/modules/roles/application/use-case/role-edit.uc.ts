import { Inject, Injectable } from '@nestjs/common';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { IRoleEditUseCase } from '@modules/roles/domain/use-cases/role-edit.interface';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { RolePort } from '../ports/role.port';
import { Result } from '@shared/infrastructure/Result';
import { UpdatedResult } from '@shared/application/ports/orm/base-orm.port';

@Injectable()
export class RoleEditUseCase implements IRoleEditUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(
    id: number,
    attrs: RoleDto,
  ): Promise<Result<string | UpdatedResult>> {
    const result: Result<UpdatedResult> = await this.rolePort.transaction(
      async (transaction) => {
        return await this.rolePort.update(id, attrs, transaction);
      },
    );

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success(result.value);
  }
}

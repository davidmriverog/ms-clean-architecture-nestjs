import { Inject, Injectable } from '@nestjs/common';
import { RolePort } from '../ports/role.port';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { IRoleRemoveUseCase } from '@modules/roles/domain/use-cases/role-remove.interface';
import { Result } from '@shared/infrastructure/Result';
import { TransactionResult } from '@shared/application/types/transaction-result.type';

@Injectable()
export class RoleRemoveUseCase implements IRoleRemoveUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly rolePort: RolePort,
  ) {}

  async execute(id: number): Promise<Result<TransactionResult | string>> {
    const result: Result<TransactionResult> = await this.rolePort.transaction(
      async (transaction) => {
        return await this.rolePort.remove(id, transaction);
      },
    );

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success(result.value);
  }
}

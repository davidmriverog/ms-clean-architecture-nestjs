import { Inject, Injectable } from '@nestjs/common';
import { RoleRepository } from '../ports/role.repository';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';
import { Result } from '@shared/infrastructure/Result';
import { TransactionResult } from '@shared/application/types/transaction-result.type';
import { IRemoveUseCase } from '@shared/domain/use-cases/remove.usecase';

@Injectable()
export class RoleRemoveUseCase implements IRemoveUseCase {
  constructor(
    @Inject(RoleProviderEnum.ROLE_ADAPTER_PORT)
    private readonly roleRepository: RoleRepository,
  ) {}

  async execute(id: number): Promise<Result<TransactionResult | string>> {
    const result: Result<TransactionResult> =
      await this.roleRepository.transaction(async (transaction) => {
        return await this.roleRepository.remove(id, transaction);
      });

    if (result.isFaliure) return Result.fail<string>(result.error);

    return Result.success(result.value);
  }
}

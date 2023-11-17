import { RoleDto } from '../dto/role.dto';
import { Result } from '@shared/infrastructure/Result';
import { TransactionResult } from '@shared/application/types/transaction-result.type';

export interface IRoleEditUseCase {
  execute(
    id: number,
    attrs: RoleDto,
  ): Promise<Result<TransactionResult | string>>;
}

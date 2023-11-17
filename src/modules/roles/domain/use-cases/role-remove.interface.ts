import { Result } from '@shared/infrastructure/Result';
import { TransactionResult } from '@shared/application/types/transaction-result.type';

export interface IRoleRemoveUseCase {
  execute(id: number): Promise<Result<TransactionResult | string>>;
}

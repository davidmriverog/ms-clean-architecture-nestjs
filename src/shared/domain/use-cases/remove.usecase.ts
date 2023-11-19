import { TransactionResult } from '@shared/application/types/transaction-result.type';
import { Result } from '@shared/infrastructure/Result';

export interface IRemoveUseCase {
  execute(id: number): Promise<Result<TransactionResult | string>>;
}

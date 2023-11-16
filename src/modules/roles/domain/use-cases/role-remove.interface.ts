import { TransactionResult } from '@shared/application/types/transaction-result.type';
import { TransactionRemoveUseCase } from '@shared/domain/use-cases/transaction-delete.usecase';

export interface IRoleRemoveUseCase
  extends TransactionRemoveUseCase<TransactionResult | string> {}

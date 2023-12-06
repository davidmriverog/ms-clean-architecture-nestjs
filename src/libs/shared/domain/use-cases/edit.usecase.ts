import { Result } from '@shared/infrastructure/Result';
import { BaseDto } from '../dto/base-dto.dto';
import { TransactionResult } from '@shared/application/types/transaction-result.type';

export interface IEditUseCase {
  execute(
    id: number,
    attrs: BaseDto,
  ): Promise<Result<TransactionResult | string>>;
}

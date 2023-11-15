import { Result } from '@shared/infrastructure/Result';

export interface TransactionCreateUseCase<D, I> {
  execute(attrs: I): Promise<Result<D | string>>;
}

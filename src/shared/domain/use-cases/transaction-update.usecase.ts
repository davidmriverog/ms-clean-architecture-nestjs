import { Result } from '@shared/infrastructure/Result';

export interface TransactionUpdateUseCase<D, I> {
  execute(id: number, attrs: I): Promise<Result<D | string>>;
}

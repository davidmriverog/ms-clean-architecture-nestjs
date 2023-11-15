import { Result } from '@shared/infrastructure/Result';

export interface TransactionRemoveUseCase<I> {
  execute(id: number): Promise<Result<I | string>>;
}

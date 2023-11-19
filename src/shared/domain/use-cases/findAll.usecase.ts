import { Result } from '@shared/infrastructure/Result';

export interface IFindAllUseCase<I> {
  execute(): Promise<Result<I[]>>;
}

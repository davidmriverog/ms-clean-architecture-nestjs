import { Result } from '@shared/infrastructure/Result';

export interface IFindByIdUseCase<I> {
  execute(id: number): Promise<Result<I>>;
}

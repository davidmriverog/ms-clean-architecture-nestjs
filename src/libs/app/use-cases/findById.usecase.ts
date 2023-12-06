import { Result } from './../../infra/http/http-result';

export interface IFindByIdUseCase<I> {
  execute(id: number): Promise<Result<I>>;
}

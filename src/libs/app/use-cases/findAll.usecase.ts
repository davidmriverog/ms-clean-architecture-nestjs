import { Result } from './../../infra/http/http-result';

export interface IFindAllUseCase<I> {
  execute(): Promise<Result<I[]>>;
}

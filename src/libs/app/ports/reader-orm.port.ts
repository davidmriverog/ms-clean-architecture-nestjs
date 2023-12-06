import { Result } from './../../infra/http/http-result';

export interface IReaderORMPort<D> {
  findById(id: number): Promise<Result<D>>;

  findAll(): Promise<Result<D[]>>;
}

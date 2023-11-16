import { Result } from '@shared/infrastructure/Result';

export interface IReaderORMPort<D> {
  findAll(): Promise<Result<D[]>>;
}

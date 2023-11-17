import { Result } from '@shared/infrastructure/Result';

export interface IReaderORMPort<D> {
  findById(id: number): Promise<Result<D>>;

  findAll(): Promise<Result<D[]>>;
}

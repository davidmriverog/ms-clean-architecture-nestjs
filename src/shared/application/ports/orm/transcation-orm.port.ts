import { Result } from '@shared/infrastructure/Result';
import { QueryRunner } from 'typeorm';

export interface ITransactionORM<I, D> {
  transaction(
    fn: (queryRunner: QueryRunner) => Promise<Result<I | any>>,
    transaction?: QueryRunner,
  ): Promise<Result<D | any>>;
}

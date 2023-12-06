import { QueryRunner } from 'typeorm';
import { Result } from './../../infra/http/http-result';

export interface ITransactionORM<I, D> {
  transaction(
    fn: (queryRunner: QueryRunner) => Promise<Result<I | any>>,
    transaction?: QueryRunner,
  ): Promise<Result<D | any>>;
}

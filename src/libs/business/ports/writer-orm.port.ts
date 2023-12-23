import { QueryRunner } from 'typeorm';

import { Result } from '../../infra/http/http-result';
import { ResultTransaction } from '../types/transaction.type';

export interface IWriteORMPort<D> {
  create(attrs, queryRunner?: QueryRunner): Promise<Result<D>>;

  update(
    id: number,
    attrs,
    queryRunner?: QueryRunner,
  ): Promise<Result<ResultTransaction>>;

  remove(
    id: number,
    queryRunner?: QueryRunner,
  ): Promise<Result<ResultTransaction>>;
}

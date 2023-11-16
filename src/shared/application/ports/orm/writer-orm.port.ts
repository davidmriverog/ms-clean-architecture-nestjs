import { QueryRunner } from 'typeorm';
import { Result } from '@shared/infrastructure/Result';
import { TransactionResult } from '@shared/application/types/transaction-result.type';

export interface IWriteORMPort<D> {
  create(attrs, queryRunner?: QueryRunner): Promise<Result<D>>;

  update(
    id: number,
    attrs,
    queryRunner?: QueryRunner,
  ): Promise<Result<TransactionResult>>;

  remove(
    id: number,
    queryRunner?: QueryRunner,
  ): Promise<Result<TransactionResult>>;
}

import { QueryRunner } from 'typeorm';

import { Result } from '../../infra/http/http-result';
import { BaseDto } from '../dto/requests/base-dto.dto';
import { ResultTransaction } from '../types/transaction.type';

export interface IWriteORMPort<D> {
  create(attrs: BaseDto, queryRunner?: QueryRunner): Promise<Result<D>>;

  update(
    id: number,
    attrs: BaseDto,
    queryRunner?: QueryRunner,
  ): Promise<Result<ResultTransaction>>;

  remove(
    id: number,
    queryRunner?: QueryRunner,
  ): Promise<Result<ResultTransaction>>;
}

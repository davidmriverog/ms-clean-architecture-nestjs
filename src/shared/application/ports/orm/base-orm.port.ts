import { Result } from '@shared/infrastructure/Result';
import { DataSource, QueryRunner } from 'typeorm';

export type UpdatedResult = { affected: boolean };

export abstract class BasePort<I> {
  _dataSource: DataSource;

  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  abstract findAll(): Promise<I[]>;

  abstract create(attrs, queryRunner?: QueryRunner): Promise<Result<I>>;

  abstract update(
    id: number,
    attrs,
    queryRunner?: QueryRunner,
  ): Promise<Result<UpdatedResult>>;

  abstract remove(
    id: number,
    queryRunner?: QueryRunner,
  ): Promise<Result<UpdatedResult>>;

  public async transaction<T>(
    fn: (queryRunner: QueryRunner) => Promise<Result<T>>,
    transaction?: QueryRunner,
  ) {
    const queryRunner = transaction ?? this._dataSource.createQueryRunner();

    if (!transaction) {
      await queryRunner.connect();
      await queryRunner.startTransaction();
    }

    try {
      const result = await fn(queryRunner);

      if (!transaction) await queryRunner.commitTransaction();

      return result;
    } catch (error) {
      console.log('error.data', error);
      if (!transaction) await queryRunner.rollbackTransaction();

      return Result.fail(error.message);
    } finally {
      if (!transaction) await queryRunner.release();
    }
  }
}

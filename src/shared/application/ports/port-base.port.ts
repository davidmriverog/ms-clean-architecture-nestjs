import { DataSource, QueryRunner } from 'typeorm';

export abstract class BasePort<I> {
  _dataSource: DataSource;

  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  abstract findAll(): Promise<I[]>;

  abstract create(attrs, queryRunner?: QueryRunner): Promise<I>;

  abstract update(
    id: number,
    attrs,
    queryRunner?: QueryRunner,
  ): Promise<boolean>;

  abstract remove(id: number, queryRunner?: QueryRunner): Promise<boolean>;

  public async transaction<T>(
    fn: (queryRunner: QueryRunner) => Promise<T>,
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
      if (!transaction) await queryRunner.rollbackTransaction();
    } finally {
      if (!transaction) await queryRunner.release();
    }
  }
}

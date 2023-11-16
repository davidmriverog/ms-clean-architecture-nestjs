import { DataSource, QueryRunner, Repository } from 'typeorm';
import { Result } from '@shared/infrastructure/Result';
import { IBaseORMPort } from './orm.port';
import { IMapper } from '@shared/infrastructure/mapper/base.mapper';
import { BaseEntity } from '@infra/common/base.entity';
import { TransactionResult } from '@shared/application/types/transaction-result.type';

export function AbstractBaseORMPort<I extends BaseEntity, D>(
  entity: typeof BaseEntity,
  bo,
) {
  abstract class BaseORMPort implements IBaseORMPort<I, D> {
    _dataSource: DataSource;
    _repository: Repository<I>;
    _mapper: IMapper<I, D>;
    _bo;

    constructor(
      dataSource: DataSource,
      repository: Repository<I>,
      mapper: IMapper<I, D>,
    ) {
      this._dataSource = dataSource;
      this._mapper = mapper;
      this._bo = bo;
      this._repository = repository;
    }

    async findAll(): Promise<Result<D[]>> {
      const entities: I[] = await this._repository
        .createQueryBuilder('c')
        .getMany();

      const results = entities.map(this._mapper.entityToBO);

      return Result.success(results);
    }

    async create(attrs: any, queryRunner?: QueryRunner): Promise<Result<I>> {
      const convertMapper = this._mapper.dtoToEntity(attrs);

      const result = await queryRunner.manager.save(convertMapper);

      return Result.success(result);
    }

    async update(
      id: number,
      attrs: any,
      queryRunner?: QueryRunner,
    ): Promise<Result<TransactionResult>> {
      const convertMapper = this._mapper.dtoToEntity(attrs);

      const result = await queryRunner.manager.update(
        entity,
        {
          [entity.getIdPropertyName()]: id,
        },
        convertMapper,
      );

      if (result.affected === 0)
        return Result.fail('Role Is not Exists for edit.');

      return Result.success({
        affected: result.affected > 0 ? true : false,
      });
    }

    async remove(
      id: number,
      queryRunner?: QueryRunner,
    ): Promise<Result<TransactionResult>> {
      const result = await queryRunner.manager
        .createQueryBuilder()
        .softDelete()
        .from(entity)
        .where(`${entity.getIdPropertyName()} = :id`, { id: id })
        .execute();

      return Result.success({
        affected: result.affected > 0 ? true : false,
      });
    }

    async transaction(
      fn: (queryRunner: QueryRunner) => Promise<Result<I>>,
      transaction?: QueryRunner,
    ): Promise<Result<D>> {
      const queryRunner = transaction ?? this._dataSource.createQueryRunner();

      if (!transaction) {
        await queryRunner.connect();
        await queryRunner.startTransaction();
      }

      try {
        const result = await fn(queryRunner);

        if (!transaction) await queryRunner.commitTransaction();

        return Result.success(this._mapper.entityToBO(result.value));
      } catch (error) {
        console.log('error.data', error);
        if (!transaction) await queryRunner.rollbackTransaction();

        return Result.fail(error.message);
      } finally {
        if (!transaction) await queryRunner.release();
      }
    }
  }

  return BaseORMPort;
}

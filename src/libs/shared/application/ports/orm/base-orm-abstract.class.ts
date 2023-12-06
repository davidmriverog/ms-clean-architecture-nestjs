import { DataSource, QueryRunner, Repository } from 'typeorm';
import { IBaseORMPort } from './orm.port';
import { BaseEntity } from '@infra/common/base.entity';
import { Result } from '@shared/infrastructure/Result';
import { IMapper } from '@shared/infrastructure/mapper/base.mapper';
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
      try {
        const entities: I[] = await this._repository
          .createQueryBuilder('c')
          .getMany();

        if (entities.length === 0)
          throw new Error(`${entity.name} not records found!`);

        const results = entities.map(this._mapper.entityToBO);

        return Result.success(results);
      } catch (error) {
        return Result.fail(error.message);
      }
    }

    async findById(id: number): Promise<Result<D>> {
      try {
        const resultEntity: I = await this._repository
          .createQueryBuilder('c')
          .where(`c.${entity.getIdPropertyName()} = :id`, { id })
          .getOne();

        if (!resultEntity) throw new Error(`${entity.name} not found!`);

        const convertMapper = this._mapper.entityToBO(resultEntity);

        return Result.success(convertMapper);
      } catch (error) {
        return Result.fail(error.message);
      }
    }

    async create(attrs: any, queryRunner?: QueryRunner): Promise<Result<I>> {
      try {
        const convertMapper = this._mapper.dtoToEntity(attrs);

        const result = await queryRunner.manager.save(convertMapper);

        return Result.success(result);
      } catch (error) {
        return Result.fail(error.message);
      }
    }

    async update(
      id: number,
      attrs: any,
      queryRunner?: QueryRunner,
    ): Promise<Result<TransactionResult>> {
      try {
        const convertMapper = this._mapper.dtoToEntity(attrs);

        const result = await queryRunner.manager.update(
          entity,
          {
            [entity.getIdPropertyName()]: id,
          },
          convertMapper,
        );

        if (result.affected === 0)
          throw new Error('No Data Affected, cause Role does not exists');

        return Result.success({
          affected: result.affected > 0 ? true : false,
        });
      } catch (error) {
        return Result.fail(error.message);
      }
    }

    async remove(
      id: number,
      queryRunner?: QueryRunner,
    ): Promise<Result<TransactionResult>> {
      try {
        const result = await queryRunner.manager
          .createQueryBuilder()
          .softDelete()
          .from(entity)
          .where(`${entity.getIdPropertyName()} = :id`, { id: id })
          .execute();

        if (result.affected === 0)
          throw new Error('No Data Affected, cause Role does not exists');

        return Result.success({
          affected: result.affected > 0 ? true : false,
        });
      } catch (error) {
        return Result.fail(error.message);
      }
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
        if (!transaction) await queryRunner.rollbackTransaction();

        return Result.fail(error.message);
      } finally {
        if (!transaction) await queryRunner.release();
      }
    }
  }

  return BaseORMPort;
}

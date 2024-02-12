import { DataSource, QueryRunner, Repository } from 'typeorm';
import { IPortOutbound } from '../../domain/ports/outbound.port';
import { IMapper } from '../mappers/base.mapper';
import { BaseEntity } from '../entities/base.entity';

export function AbstractImplAdapter<I extends BaseEntity, D>(
  entity: typeof BaseEntity,
  bo,
) {
  abstract class AbstractAdapter implements IPortOutbound<D> {
    _dataSource: DataSource;
    _repository: Repository<I>;
    _mapper: IMapper<I, D>;
    _bo: any;

    constructor(
      dataSource: DataSource,
      engineRepsitory: Repository<I>,
      mapper: IMapper<I, D>,
    ) {
      this._dataSource = dataSource;
      this._repository = engineRepsitory;
      this._mapper = mapper;
      this._bo = bo;
    }

    async getAll(): Promise<D[]> {
      const entities: I[] = await this._repository
        .createQueryBuilder('c')
        .getMany();

      return entities.map(this._mapper.entityToBO);
    }

    async getById(id: number): Promise<D> {
      const resultEntity: I = await this._repository
        .createQueryBuilder('c')
        .where(`c.${entity.getIdPropertyName()} = :id`, { id })
        .getOne();

      if (!resultEntity) throw new Error(`${entity.name} not found!`);

      return this._mapper.entityToBO(resultEntity);
    }

    create(entityDto: any, tr?: QueryRunner): Promise<D> {
      throw new Error('Method not implemented.');
    }

    update(id: number, entityDto: any, tr?: QueryRunner): Promise<D> {
      throw new Error('Method not implemented.');
    }

    remove(id: number, tr?: QueryRunner): Promise<boolean> {
      throw new Error('Method not implemented.');
    }
  }

  return AbstractAdapter;
}

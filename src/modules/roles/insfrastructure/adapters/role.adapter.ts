import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';

import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleEntity } from './persistence/role.entity';
import { RolePort } from '@modules/roles/application/ports/role.port';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';
import { RoleMapper } from '../mappers/role.mapper';
import { Result } from '@shared/infrastructure/Result';
import { UpdatedResult } from '@shared/application/ports/port-base.port';

export class RoleAdapterPort extends RolePort {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(RoleProviderEnum.ROLE_REPOSITORY)
    private readonly engineRepsitory: Repository<RoleEntity>,
    private readonly roleMapper: RoleMapper,
  ) {
    super(dataSource);
  }

  async findAll(): Promise<RoleBO[]> {
    const entities: RoleEntity[] = await this.engineRepsitory
      .createQueryBuilder('c')
      .getMany();

    const mappers = entities.map(this.roleMapper.transform);

    return mappers;
  }

  async create(attrs: any, queryRunner?: QueryRunner): Promise<Result<RoleBO>> {
    const entity = this.roleMapper.transformDtoToEntity(attrs);

    const result = await queryRunner.manager.save(entity);

    return Result.success(this.roleMapper.transform(result));
  }

  async update(
    id: number,
    attrs: any,
    queryRunner?: QueryRunner,
  ): Promise<Result<UpdatedResult>> {
    const entity = this.roleMapper.transformDtoToEntity(attrs);

    const result = await queryRunner.manager.update(
      RoleEntity,
      {
        [RoleEntity.getIdPropertyName()]: id,
      },
      entity,
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
  ): Promise<Result<UpdatedResult>> {
    const result = await queryRunner.manager
      .createQueryBuilder()
      .softDelete()
      .from(RoleEntity)
      .where(`${RoleEntity.getIdPropertyName()} = :id`, { id: id })
      .execute();

    return Result.success({
      affected: result.affected > 0 ? true : false,
    });
  }
}

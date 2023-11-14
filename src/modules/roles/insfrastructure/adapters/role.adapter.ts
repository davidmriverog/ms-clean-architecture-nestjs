import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';

import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleEntity } from './persistence/role.entity';
import { RolePort } from '@modules/roles/application/ports/role.port';
import { RoleProviderEnum } from '@modules/roles/domain//enums/role-provider.enum';
import { RoleMapper } from '../mappers/role.mapper';

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

  async create(attrs: any, queryRunner?: QueryRunner): Promise<RoleBO> {
    const entity = this.roleMapper.transformDtoToEntity(attrs);

    const result = await queryRunner.manager.save(entity);

    return this.roleMapper.transform(result);
  }
}

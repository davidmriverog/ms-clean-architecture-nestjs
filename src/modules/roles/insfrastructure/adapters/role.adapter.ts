import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { RoleMapper } from '../mappers/role.mapper';

import { RolePort } from '@modules/roles/application/ports/role.port';
import { RoleBO } from '@modules/roles/core/domain/role.bo';
import { RoleEntity } from './persistence/role.entity';
import { ROLE_REPOSITORY } from './persistence/role.provider';

export class RoleAdapterPort implements RolePort {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(ROLE_REPOSITORY)
    private readonly engineRepsitory: Repository<RoleEntity>,
    private readonly roleMapper: RoleMapper,
  ) {}

  async findAll(): Promise<RoleBO[]> {
    const roles = await this.engineRepsitory.createQueryBuilder('c').getMany();

    return roles.map(this.roleMapper.transform);
  }
}

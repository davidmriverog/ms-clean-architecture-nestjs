import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { RoleBO } from '@modules/roles/core/role.bo';
import { RoleEntity } from './persistence/role.entity';
import { RolePort } from '@modules/roles/application/ports/role.port';
import { RoleProviderEnum } from '@modules/roles/core/enums/role-provider.enum';
import { RoleMapper } from '../mappers/role.mapper';

export class RoleAdapterPort implements RolePort {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(RoleProviderEnum.ROLE_REPOSITORY)
    private readonly engineRepsitory: Repository<RoleEntity>,
    private readonly roleMapper: RoleMapper,
  ) {}

  async findAll(): Promise<RoleBO[]> {
    const entities: RoleEntity[] = await this.engineRepsitory
      .createQueryBuilder('c')
      .getMany();

    const mappers = entities.map(this.roleMapper.transform);

    return mappers;
  }
}

import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { RoleEntity } from './persistence/role.entity';
import { RolePort } from '@modules/roles/application/ports/role.port';
import { RoleProviderEnum } from '@modules/roles/core/role-provider.enum';

export class RoleAdapterPort implements RolePort {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(RoleProviderEnum.ROLE_REPOSITORY)
    private readonly engineRepsitory: Repository<RoleEntity>,
  ) {}

  async findAll(): Promise<RoleEntity[]> {
    return await this.engineRepsitory.createQueryBuilder('c').getMany();
  }
}

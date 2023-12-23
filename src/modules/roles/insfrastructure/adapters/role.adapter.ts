import { Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AbstractBaseTypeORMPort } from '@libs/business';
import { InjectDataSource } from '@nestjs/typeorm';

import { Role } from '../entities/role.entity';
import { RoleBO } from './../../domain/role.bo';
import { RoleMapper } from '../mappers/role.mapper';
import { RoleRepository } from './../../domain/ports/role.repository';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';

export class RoleRepositoryAdapter
  extends AbstractBaseTypeORMPort<Role, RoleBO>(Role, RoleBO)
  implements RoleRepository
{
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(RoleProviderEnum.ROLE_REPOSITORY)
    private readonly engineRepsitory: Repository<Role>,
    private readonly roleMapper: RoleMapper,
  ) {
    super(dataSource, engineRepsitory, roleMapper);
  }

  // Additional implements
}

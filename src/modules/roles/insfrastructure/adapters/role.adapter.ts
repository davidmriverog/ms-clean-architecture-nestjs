import { Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { Role } from '../entities/role.entity';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleMapper } from '../mappers/role.mapper';
import { RoleRepository } from '@modules/roles/application/ports/role.repository';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';

import { AbstractBaseORMPort } from '@shared/application/ports/orm/base-orm-abstract.class';

export class RoleRepositoryAdapter
  extends AbstractBaseORMPort<Role, RoleBO>(Role, RoleBO)
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

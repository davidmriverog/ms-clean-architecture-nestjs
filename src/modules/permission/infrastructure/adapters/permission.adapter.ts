import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { AbstractImplAdapter } from 'sunset-nestjs';

import { Permission } from '../persistence/permission.entity';
import { PermissionBO } from '../../../permission/domain/model/permission.bo';
import { PERMISSION_ENTITY } from '../../domain/consts/permission.const';
import { PermissionMapper } from '../mappers/permission.mapper';
import { PermissionRepository } from '../../domain/ports/outbound/permission.repository';

@Injectable()
export class PermissionAdapter
  extends AbstractImplAdapter<Permission, PermissionBO>(
    Permission,
    PermissionBO,
  )
  implements PermissionRepository
{
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(PERMISSION_ENTITY)
    private readonly engineRepsitory: Repository<Permission>,
    private readonly permissionMapper: PermissionMapper,
  ) {
    super(dataSource, engineRepsitory, permissionMapper);
  }

  // additionals
}

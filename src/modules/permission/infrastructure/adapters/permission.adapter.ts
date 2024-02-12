import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { Permission } from '../persistence/permission.entity';
import { PermissionBO } from '../../../permission/domain/model/permission.bo';
import { PERMISSION_ENTITY } from '../../domain/consts/permission.const';
import { PermissionRepository } from '../../domain/ports/outbound/permission.repository';
import { PermissionMapper } from '../mappers/permission.mapper';

@Injectable()
export class PermissionAdapter implements PermissionRepository {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(PERMISSION_ENTITY)
    private readonly engineRepsitory: Repository<Permission>,
    private readonly permissionMapper: PermissionMapper,
  ) {}

  async getAll(): Promise<PermissionBO[]> {
    const result = await this.engineRepsitory.find({});

    return result.map(this.permissionMapper.entityToBo);
  }
}

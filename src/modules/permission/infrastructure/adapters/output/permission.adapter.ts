import { Permission } from '../../entities/permission.model';
import { PermissionPort } from '../../ports/permission.port';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@libs/infra';
import { PermissionBO } from '@modules/permission/domain/permission.bo';
import { PermissionMapper } from '../../mappers/permission.mapper';

@Injectable()
export class PermissionAdapter implements PermissionPort {
  constructor(
    private readonly engineRepsitory: EntityRepository<Permission>,
    private readonly permissionMapper: PermissionMapper,
  ) {
    //
  }

  async getAll(): Promise<PermissionBO[]> {
    const results = await this.engineRepsitory.getAll();

    return results.map(this.permissionMapper.entityToBo);
  }
}

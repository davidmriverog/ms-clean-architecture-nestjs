import { Inject, Injectable } from '@nestjs/common';
import { AbstractDomainService } from 'sunset-nestjs';

import { PermissionBO } from '../model/permission.bo';
import { PERMISSION_REPOSITORY } from '../consts/permission.const';
import { PermissionRepository } from '../ports/outbound/permission.repository';

@Injectable()
export class PermissionDomainService extends AbstractDomainService<PermissionBO> {
  constructor(
    @Inject(PERMISSION_REPOSITORY)
    private readonly permissionRepository: PermissionRepository,
  ) {
    super(permissionRepository);
  }

  // override
}

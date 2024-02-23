import { Inject, Injectable } from '@nestjs/common';
import { AbstractDomainService } from '@libs/domain';

import { PermissionBO } from '../../domain/model/permission.bo';
import { PERMISSION_PORT } from '../../domain/consts/permission.const';
import { PermissionPortRepository } from '../../domain/ports/out/permission.port';

@Injectable()
export class PermissionDomainService extends AbstractDomainService<PermissionBO> {
  constructor(
    @Inject(PERMISSION_PORT)
    private readonly permissionPort: PermissionPortRepository,
  ) {
    super(permissionPort);
  }

  // override
}

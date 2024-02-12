import { Inject, Injectable } from '@nestjs/common';

import { PermissionService } from '../domain/ports/inbound/permission.service';
import { PERMISSION_SERVICE } from '../domain/consts/permission.const';

@Injectable()
export class RemovePermissionUseCase {
  constructor(
    @Inject(PERMISSION_SERVICE)
    private readonly permissionService: PermissionService,
  ) {}

  async exec(id: number): Promise<boolean> {
    return await this.permissionService.remove(id);
  }
}

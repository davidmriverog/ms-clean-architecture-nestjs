import { Inject, Injectable } from '@nestjs/common';

import { PermissionBO } from '../domain/model/permission.bo';
import { PermissionService } from '../domain/ports/inbound/permission.service';
import { PERMISSION_SERVICE } from '../domain/consts/permission.const';

@Injectable()
export class GetAllPermissionUseCase {
  constructor(
    @Inject(PERMISSION_SERVICE)
    private readonly permissionService: PermissionService,
  ) {}

  async exec(): Promise<PermissionBO[]> {
    return await this.permissionService.getAll();
  }
}
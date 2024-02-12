import { Inject, Injectable } from '@nestjs/common';

import { PermissionBO } from '../domain/model/permission.bo';
import { PermissionService } from '../domain/ports/inbound/permission.service';
import { PERMISSION_SERVICE } from '../domain/consts/permission.const';
import { CreatePermissionDto } from '../infrastructure/http/dto/permission.dto';

@Injectable()
export class CreatePermissionUseCase {
  constructor(
    @Inject(PERMISSION_SERVICE)
    private readonly permissionService: PermissionService,
  ) {}

  async exec(permissionDto: CreatePermissionDto): Promise<PermissionBO> {
    return await this.permissionService.create(permissionDto);
  }
}

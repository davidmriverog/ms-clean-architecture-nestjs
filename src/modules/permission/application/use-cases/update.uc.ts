import { Inject, Injectable } from '@nestjs/common';

import { PermissionBO } from '../../domain/model/permission.bo';
import { PermissionService } from '../../domain/ports/in/permission.service';
import { PERMISSION_SERVICE } from '../../domain/consts/permission.const';
import { CreatePermissionDto } from '../../infrastructure/http/dto/permission.dto';

@Injectable()
export class UpdatePermissionUseCase {
  constructor(
    @Inject(PERMISSION_SERVICE)
    private readonly permissionService: PermissionService,
  ) {}

  async exec(
    id: number,
    permissionDto: CreatePermissionDto,
  ): Promise<PermissionBO> {
    return await this.permissionService.update(id, permissionDto);
  }
}

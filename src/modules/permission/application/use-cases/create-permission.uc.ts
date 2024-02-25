import { Result } from '@libs/infra';
import { Inject, Injectable } from '@nestjs/common';

import { PermissionBO } from '../../domain/model/permission.bo';
import { PermissionService } from '../../domain/ports/in/permission.service';
import { PERMISSION_SERVICE } from '../../domain/consts/permission.const';
import { CreatePermissionDto } from '../../infrastructure/http/dto/permission.dto';

@Injectable()
export class CreatePermissionUseCase {
  constructor(
    @Inject(PERMISSION_SERVICE)
    private readonly permissionService: PermissionService,
  ) {}

  async exec(
    permissionDto: CreatePermissionDto,
  ): Promise<Result<PermissionBO>> {
    try {
      const result = await this.permissionService.create(permissionDto);

      return Result.success(result);
    } catch (error) {
      return Result.fail(error.message);
    }
  }
}

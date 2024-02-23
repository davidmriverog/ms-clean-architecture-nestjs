import { Result } from '@libs/infra';
import { Inject, Injectable } from '@nestjs/common';

import { PermissionBO } from '../../domain/model/permission.bo';
import { PermissionService } from '../../domain/ports/in/permission.service';
import { PERMISSION_SERVICE } from '../../domain/consts/permission.const';

@Injectable()
export class GetAllPermissionUseCase {
  constructor(
    @Inject(PERMISSION_SERVICE)
    private readonly permissionService: PermissionService,
  ) {}

  async exec(): Promise<Result<PermissionBO[]>> {
    try {
      const result = await this.permissionService.getAll();

      if (result.length === 0) throw new Error('Record not found');

      return Result.success(result);
    } catch (error) {
      return Result.fail(error.message);
    }
  }
}

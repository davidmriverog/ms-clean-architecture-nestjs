import { Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';

import { PermissionBO } from '../domain/model/permission.bo';
import { PermissionService } from '../domain/ports/inbound/permission.service';

@Injectable()
export class GetAllPermissionUseCase {
  constructor(private readonly permissionService: PermissionService) {}

  async exec(): Promise<Result<PermissionBO[]>> {
    try {
      const result = await this.permissionService.getAll();

      return Result.success(result);
    } catch (error) {
      return Result.fail(error.message);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { Result } from '@libs/infra';
import { PermissionBO } from '../domain/permission.bo';
import { PermissionPort } from '../infrastructure/ports/permission.port';

@Injectable()
export class FindAllPermissionUseCase {
  constructor(private readonly permissionPort: PermissionPort) {}

  async execute(): Promise<Result<PermissionBO[]>> {
    try {
      const result = await this.permissionPort.getAll();

      return Result.success(result);
    } catch (error) {
      return Result.fail(error.message);
    }
  }
}

import { Controller, Get, UseFilters } from '@nestjs/common';
import { PermissionExceptionFilter } from '../exception-filters/permission-exception.filter';

import { GetAllPermissionUseCase } from '../../../application/getAll.uc';

@Controller('permissions')
@UseFilters(PermissionExceptionFilter)
export class PermissionController {
  constructor(
    private readonly getAllPermissionUseCase: GetAllPermissionUseCase,
  ) {}

  @Get()
  async getAll() {
    return this.getAllPermissionUseCase.exec();
  }
}

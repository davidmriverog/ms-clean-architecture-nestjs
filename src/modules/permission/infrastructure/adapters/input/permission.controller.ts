import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { HttpResponse } from '@libs/infra';

import { FindAllPermissionUseCase } from '../../../application/find-all.use-case';

@Controller('permissions')
export class PermissionController extends HttpResponse {
  constructor(
    private readonly findAllPermissionUseCase: FindAllPermissionUseCase,
  ) {
    super();
  }

  @Get()
  async getAll(@Res() res: Response) {
    const result = await this.findAllPermissionUseCase.execute();

    return this.response(res, result);
  }
}

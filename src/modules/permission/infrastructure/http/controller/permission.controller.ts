import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import { Response } from 'express';
import { PermissionExceptionFilter } from '../exception-filters/permission-exception.filter';

import { CreatePermissionDto } from '../dto/permission.dto';

import { GetAllPermissionUseCase } from '../../../application/getAll.uc';
import { GetByIdPermissionUseCase } from '@modules/permission/application/getById.uc';

@Controller('permissions')
@UseFilters(PermissionExceptionFilter)
export class PermissionController {
  constructor(
    private readonly getAllPermissionUseCase: GetAllPermissionUseCase,
    private readonly getByIdPermissionUseCase: GetByIdPermissionUseCase,
  ) {}

  @Get()
  async getAll() {
    return this.getAllPermissionUseCase.exec();
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.getByIdPermissionUseCase.exec(id);
  }

  @Post()
  async create(@Body() attrs: CreatePermissionDto, @Res() res: Response) {
    return res.status(HttpStatus.OK).json({ message: 'OK' });
  }
}

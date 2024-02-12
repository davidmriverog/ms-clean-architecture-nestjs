import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { PermissionExceptionFilter } from '../exception-filters/permission-exception.filter';

import { CreatePermissionDto } from '../dto/permission.dto';

import { GetAllPermissionUseCase } from '../../../application/getAll.uc';
import { GetByIdPermissionUseCase } from '../../../application/getById.uc';
import { CreatePermissionUseCase } from '../../../application/create.uc';
import { UpdatePermissionUseCase } from '../../../application/update.uc';
import { RemovePermissionUseCase } from '../../../application/remove.uc';

@Controller('permissions')
@UseFilters(PermissionExceptionFilter)
export class PermissionController {
  constructor(
    private readonly getAllPermissionUseCase: GetAllPermissionUseCase,
    private readonly getByIdPermissionUseCase: GetByIdPermissionUseCase,
    private readonly createPermissionUseCase: CreatePermissionUseCase,
    private readonly updatePermissionUseCase: UpdatePermissionUseCase,
    private readonly removePermissionUseCase: RemovePermissionUseCase,
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
  async create(
    @Body(new ValidationPipe()) attrs: CreatePermissionDto,
    @Res() res: Response,
  ) {
    const result = await this.createPermissionUseCase.exec(attrs);

    return res.status(HttpStatus.OK).json(result);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) attrs: CreatePermissionDto,
    @Res() res: Response,
  ) {
    const result = await this.updatePermissionUseCase.exec(id, attrs);

    return res.status(HttpStatus.OK).json(result);
  }

  @Delete('/:id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    const result = await this.removePermissionUseCase.exec(id);

    return res.status(HttpStatus.OK).json(result);
  }
}

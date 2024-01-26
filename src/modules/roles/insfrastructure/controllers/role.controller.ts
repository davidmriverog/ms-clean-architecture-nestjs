import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';

import { HttpResponse } from '@libs/infra';
import { Response } from 'express';

import { RoleDto } from './../../domain/dto/role.dto';
import { RoleService } from '../services/role.service';

@Controller('roles')
export class RoleController extends HttpResponse {
  constructor(private readonly roleService: RoleService) {
    super();
  }

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.roleService.findAll();

    return this.response(res, result);
  }

  @Get('/:id')
  async findById(@Param('id') id: number, @Res() res: Response) {
    const result = await this.roleService.findById(id);

    return this.response(res, result);
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) body: RoleDto,
    @Res() res: Response,
  ) {
    const result = await this.roleService.create(body);

    // hola mundo

    return this.response(res, result);
  }

  @Put('/:id')
  async edit(
    @Body(new ValidationPipe()) body: RoleDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const result = await this.roleService.edit(id, body);

    return this.response(res, result);
  }

  @Delete('/:id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    const result = await this.roleService.remove(id);

    return this.response(res, result);
  }
}

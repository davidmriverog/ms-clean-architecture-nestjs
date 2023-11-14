import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { RoleService } from '../services/role.service';
import { RoleDto } from '@modules/roles/domaindto/role.dto';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.roleService.getAll();

    return res.status(HttpStatus.OK).json(result);
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) body: RoleDto,
    @Res() res: Response,
  ) {
    const result = await this.roleService.create(body);

    return res.status(HttpStatus.OK).json(result);
  }
}

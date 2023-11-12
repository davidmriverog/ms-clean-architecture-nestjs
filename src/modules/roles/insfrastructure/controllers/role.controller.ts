import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { RoleService } from '../services/role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.roleService.getAll();

    return res.status(HttpStatus.OK).json(result);
  }
}

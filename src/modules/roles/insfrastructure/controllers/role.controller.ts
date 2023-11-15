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
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { RoleService } from '../services/role.service';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';

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

  @Put('/:id')
  async update(
    @Body(new ValidationPipe()) body: RoleDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const result = await this.roleService.update(id, body);

    return res.status(HttpStatus.OK).json(result);
  }

  @Delete('/:id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    const result = await this.roleService.remove(id);

    return res.status(HttpStatus.OK).json(result);
  }
}

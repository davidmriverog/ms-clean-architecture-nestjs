import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IMapper } from '@libs/infra';

import { Role } from '../entities/role.entity';
import { RoleBO } from './../../domain/role.bo';
import { RoleDto } from './../../domain/dto/role.dto';

@Injectable()
export class RoleMapper implements IMapper<Role, RoleBO> {
  entityToBO(entity: Role): RoleBO {
    return <RoleBO>{
      roleId: entity.roleId,
      description: entity.description,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  dtoToEntity(dto: RoleDto): RoleBO {
    return plainToInstance(Role, {
      ...dto,
    });
  }
}

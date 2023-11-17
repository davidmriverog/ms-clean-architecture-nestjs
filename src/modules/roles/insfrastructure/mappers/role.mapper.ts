import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { Role } from '../entities/role.entity';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { IMapper } from '@shared/infrastructure/mapper/base.mapper';

@Injectable()
export class RoleMapper implements IMapper<Role, RoleBO> {
  entityToBO(entity: Role): RoleBO {
    return plainToInstance(RoleBO, {
      ...entity,
    });
  }

  dtoToEntity(dto: RoleDto): RoleBO {
    return plainToInstance(Role, {
      ...dto,
    });
  }
}

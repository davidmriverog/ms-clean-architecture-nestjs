import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { Role } from '../adapters/role.entity';
import { IMapper } from '@shared/infrastructure/mapper/base.mapper';

@Injectable()
export class RoleMapper implements IMapper<Role, RoleBO> {
  entityToBO(from: Role): RoleBO {
    return plainToInstance(RoleBO, {
      ...from,
    });
  }

  dtoToEntity(from: RoleDto): RoleBO {
    return plainToInstance(Role, {
      ...from,
    });
  }
}

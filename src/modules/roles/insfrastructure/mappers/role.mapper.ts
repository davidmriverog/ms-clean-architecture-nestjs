import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { RoleBO } from '@modules/roles/domain/role.bo';
import { RoleDto } from '@modules/roles/domain/dto/role.dto';
import { RoleEntity } from '../adapters/persistence/role.entity';

@Injectable()
export class RoleMapper {
  transform(roleEntity: RoleEntity): RoleBO {
    return plainToInstance(RoleBO, {
      ...roleEntity,
    });
  }

  transformDtoToEntity(dto: RoleDto): RoleEntity {
    return plainToInstance(RoleEntity, {
      ...dto,
    });
  }
}

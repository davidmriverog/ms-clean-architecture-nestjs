import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { RoleBO } from '@modules/roles/core/domain/role.bo';
import { RoleEntity } from '../adapters/persistence/role.entity';

@Injectable()
export class RoleMapper {
  transform(roleEntity: RoleEntity): RoleBO {
    return plainToInstance(RoleBO, roleEntity);
  }
}

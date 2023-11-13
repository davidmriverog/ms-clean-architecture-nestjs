import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { RoleBO } from '@modules/roles/core/role.bo';
import { RoleEntity } from '../adapters/persistence/role.entity';

@Injectable()
export class RoleMapper {
  transform(roleEntity: RoleEntity): RoleBO {
    const convert = plainToInstance(RoleBO, roleEntity);

    return convert;
  }
}

import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { Permission } from '../persistence/permission.entity';
import { PermissionBO } from '../../domain/model/permission.bo';

@Injectable()
export class PermissionMapper {
  entityToBo(entity: Permission): PermissionBO {
    return plainToInstance(PermissionBO, entity);
  }
}

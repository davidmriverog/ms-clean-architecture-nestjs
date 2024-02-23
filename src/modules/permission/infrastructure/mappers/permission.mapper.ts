import { Injectable } from '@nestjs/common';
import { IMapper } from '@libs/infra';
import { plainToInstance } from 'class-transformer';

import { Permission } from '../persistence/permission.entity';
import { PermissionBO } from '../../domain/model/permission.bo';

@Injectable()
export class PermissionMapper implements IMapper<Permission, PermissionBO> {
  entityToBO(from: Permission): PermissionBO {
    return plainToInstance(PermissionBO, { ...from });
  }

  dtoToEntity(from: PermissionBO): Permission {
    return plainToInstance(Permission, { ...from });
  }
}

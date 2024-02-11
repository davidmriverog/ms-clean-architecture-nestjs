import { Injectable } from '@nestjs/common';
import { Permission } from '../entities/permission.model';
import { PermissionBO } from '@modules/permission/domain/permission.bo';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PermissionMapper {
  entityToBo(entity: Permission): PermissionBO {
    return plainToInstance(PermissionBO, entity);
  }
}

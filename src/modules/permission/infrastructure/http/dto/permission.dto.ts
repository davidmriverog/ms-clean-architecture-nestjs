import { PartialType } from '@nestjs/swagger';
import { PermissionBO } from '../../../domain/model/permission.bo';

export class CreatePermissionDto extends PartialType(PermissionBO) {
  // additionals
}

export class UpdatePermissionDto extends PartialType(PermissionBO) {
  // additionals
}

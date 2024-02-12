import { IntersectionType } from '@nestjs/mapped-types';
import { PermissionBO } from '../../../domain/model/permission.bo';

export class CreatePermissionDto extends IntersectionType(PermissionBO) {
  //
}

export class UpdatePermissionDto extends IntersectionType(PermissionBO) {
  // additionals
}

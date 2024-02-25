import { IntersectionType, OmitType } from '@nestjs/mapped-types';
import { PermissionBO } from '../../../domain/model/permission.bo';

export class CreatePermissionDto extends OmitType(
  IntersectionType(PermissionBO),
  ['id', 'createdAt', 'updatedAt', 'deletedAt'] as const,
) {
  //
}

export class UpdatePermissionDto extends IntersectionType(PermissionBO) {
  // additionals
}

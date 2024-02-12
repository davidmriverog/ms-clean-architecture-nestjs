import { IPortOutbound } from 'sunset-nestjs';
import { PermissionBO } from '../../model/permission.bo';

export interface PermissionRepository extends IPortOutbound<PermissionBO> {
  // additionals
}

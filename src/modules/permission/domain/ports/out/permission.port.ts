import { IPortOutbound } from 'sunset-nestjs';
import { PermissionBO } from '../../model/permission.bo';

export interface PermissionPortRepository extends IPortOutbound<PermissionBO> {
  // additionals
}

import { IPortInbound } from 'sunset-nestjs';
import { PermissionBO } from '../../model/permission.bo';

export interface PermissionService extends IPortInbound<PermissionBO> {
  //
}

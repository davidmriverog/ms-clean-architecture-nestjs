import { IPortOutbound } from '@libs/domain';
import { PermissionBO } from '../../model/permission.bo';

export interface PermissionPortRepository extends IPortOutbound<PermissionBO> {
  // additionals
}

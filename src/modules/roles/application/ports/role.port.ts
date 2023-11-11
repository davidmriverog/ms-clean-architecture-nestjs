import { RoleBO } from '@modules/roles/business/role.bo';
import { BasePort } from '@shared/application/ports/port-base.port';

export interface RolePort extends BasePort<RoleBO> {}

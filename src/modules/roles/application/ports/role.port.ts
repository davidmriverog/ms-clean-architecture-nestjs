import { BasePort } from '@shared/application/ports/port-base.port';
import { RoleBO } from '@modules/roles/core/role.bo';

export interface RolePort extends BasePort<RoleBO> {}

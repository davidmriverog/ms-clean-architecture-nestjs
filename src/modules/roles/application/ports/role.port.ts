import { RoleBO } from '@modules/roles/core/domain/role.bo';
import { BasePort } from '@shared/application/ports/port-base.port';

export interface RolePort extends BasePort<RoleBO> {}

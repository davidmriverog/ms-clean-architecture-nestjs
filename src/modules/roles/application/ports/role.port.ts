import { RoleBO } from '@modules/roles/domain/role.bo';
import { BasePort } from '@shared/application/ports/port-base.port';

export abstract class RolePort extends BasePort<RoleBO> {}

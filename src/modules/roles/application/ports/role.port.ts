import { RoleBO } from '@modules/roles/domainrole.bo';
import { BasePort } from '@shared/application/ports/port-base.port';

export abstract class RolePort extends BasePort<RoleBO> {}

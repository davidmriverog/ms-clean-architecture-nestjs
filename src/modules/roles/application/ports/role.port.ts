import { BasePort } from '@shared/application/ports/port-base.port';
import { RoleEntity } from '@modules/roles/insfrastructure/adapters/persistence/role.entity';

export interface RolePort extends BasePort<RoleEntity> {}

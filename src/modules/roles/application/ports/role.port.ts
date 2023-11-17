import { RoleBO } from '@modules/roles/domain/role.bo';
import { Role } from '@modules/roles/insfrastructure/entities/role.entity';
import { IBaseORMPort } from '@shared/application/ports/orm/orm.port';

export interface RolePort extends IBaseORMPort<Role, RoleBO> {
  // Other methods
}

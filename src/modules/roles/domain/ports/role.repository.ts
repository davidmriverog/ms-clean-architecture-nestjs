import { IBaseRepositoryPort } from '@libs/business';
import { RoleBO } from '@modules/roles/domain/role.bo';
import { Role } from '@modules/roles/insfrastructure/entities/role.entity';

export interface RoleRepository extends IBaseRepositoryPort<Role, RoleBO> {
  // Other methods
}

import { RolePort } from '@modules/roles/application/ports/role.port';
import { RoleBO } from '@modules/roles/core/domain/role.bo';

export class RoleAdapterPort implements RolePort {
  async findAll(): Promise<RoleBO[]> {
    return null;
  }
}

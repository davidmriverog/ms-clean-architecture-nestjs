import { RoleDto } from '../dto/role.dto';
import { RoleBO } from '../role.bo';

export interface IRoleNewUseCase {
  execute(attrs: RoleDto): Promise<RoleBO>;
}

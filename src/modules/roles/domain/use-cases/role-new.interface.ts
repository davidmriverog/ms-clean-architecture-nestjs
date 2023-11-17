import { RoleBO } from '../role.bo';
import { RoleDto } from '../dto/role.dto';
import { Result } from '@shared/infrastructure/Result';

export interface IRoleNewUseCase {
  execute(attrs: RoleDto): Promise<Result<RoleBO | string>>;
}

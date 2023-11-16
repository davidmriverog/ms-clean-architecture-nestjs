import { RoleBO } from '../role.bo';
import { Result } from '@shared/infrastructure/Result';

export interface IRoleGetAllUseCase {
  execute(): Promise<Result<RoleBO[]>>;
}

import { RoleBO } from '../role.bo';
import { Result } from '@shared/infrastructure/Result';

export interface IRoleFindByIdUseCase {
  execute(id: number): Promise<Result<RoleBO>>;
}

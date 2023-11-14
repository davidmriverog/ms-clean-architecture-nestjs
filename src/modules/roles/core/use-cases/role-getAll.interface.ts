import { RoleBO } from '../role.bo';

export interface IRoleGetAllUseCase {
  execute(): Promise<RoleBO[]>;
}

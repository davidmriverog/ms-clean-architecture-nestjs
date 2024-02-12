import { PermissionBO } from '../../model/permission.bo';

export interface PermissionService {
  getAll(): Promise<PermissionBO[]>;
}

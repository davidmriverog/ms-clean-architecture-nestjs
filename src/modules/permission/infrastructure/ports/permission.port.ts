import { PermissionBO } from '../../domain/permission.bo';

export interface PermissionPort {
  getAll(): Promise<PermissionBO[]>;
}

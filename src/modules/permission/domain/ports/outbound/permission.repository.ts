import { PermissionBO } from '../../model/permission.bo';

export interface PermissionRepository {
  getAll(): Promise<PermissionBO[]>;
}

export const PermissionRepository = Symbol('PermissionRepository');

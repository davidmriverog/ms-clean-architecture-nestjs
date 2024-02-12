import { PermissionBO } from '../../model/permission.bo';

export interface PermissionService {
  getAll(): Promise<PermissionBO[]>;
}

export const PermissionService = Symbol('PermissionService');

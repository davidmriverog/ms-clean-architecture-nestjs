import { Injectable } from '@nestjs/common';
import { PermissionBO } from '../model/permission.bo';
import { PermissionService } from '../ports/inbound/permission.service';
import { PermissionRepository } from '../ports/outbound/permission.repository';

@Injectable()
export class PermissionDomainService implements PermissionService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  async getAll(): Promise<PermissionBO[]> {
    return await this.permissionRepository.getAll();
  }
}

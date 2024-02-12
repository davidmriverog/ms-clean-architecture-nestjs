import { Provider } from '@nestjs/common';
import { PermissionMapper } from '../../mappers/permission.mapper';

export const PERMISSION_MAPPER_PROVIDERS = [PermissionMapper] as Provider[];

import { RoleRepositoryAdapter } from '../adapters/role.adapter';
import { RoleProviderEnum } from '@modules/roles/domain/enums/role-provider.enum';

export const ROLE_PORT_PROVIDER = [
  {
    provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
    useClass: RoleRepositoryAdapter,
  },
];

import { RoleBO } from '../role.bo';
import { RoleDto } from '../dto/role.dto';

import { TransactionCreateUseCase } from '@shared/domain/use-cases/transaction-create.usecase';

export interface IRoleNewUseCase
  extends TransactionCreateUseCase<RoleBO, RoleDto> {}

import { RoleBO } from '../role.bo';
import { RoleDto } from '../dto/role.dto';

import { TransactionUseCase } from '@shared/domain/use-cases/transaction.usecase';

export interface IRoleNewUseCase extends TransactionUseCase<RoleBO, RoleDto> {}

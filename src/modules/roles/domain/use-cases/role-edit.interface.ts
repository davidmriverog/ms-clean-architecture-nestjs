import { RoleDto } from '../dto/role.dto';
import { TransactionUpdateUseCase } from '@shared/domain/use-cases/transaction-update.usecase';

export interface IRoleEditUseCase
  extends TransactionUpdateUseCase<boolean, RoleDto> {}

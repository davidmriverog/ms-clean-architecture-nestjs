import { RoleDto } from '../dto/role.dto';
import { TransactionResult } from '@shared/application/types/transaction-result.type';
import { TransactionUpdateUseCase } from '@shared/domain/use-cases/transaction-update.usecase';

export interface IRoleEditUseCase
  extends TransactionUpdateUseCase<TransactionResult | string, RoleDto> {}

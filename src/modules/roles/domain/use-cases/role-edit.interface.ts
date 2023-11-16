import { RoleDto } from '../dto/role.dto';
import { UpdatedResult } from '@shared/application/ports/orm/base-orm.port';
import { TransactionUpdateUseCase } from '@shared/domain/use-cases/transaction-update.usecase';

export interface IRoleEditUseCase
  extends TransactionUpdateUseCase<UpdatedResult, RoleDto> {}

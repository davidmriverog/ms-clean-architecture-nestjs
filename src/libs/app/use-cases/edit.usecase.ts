import { Result } from './../../infra/http/http-result';
import { BaseDto } from '../../business/base-dto.dto';
import { ResultTransaction } from '../ports/types/transaction.type';

export interface IEditUseCase {
  execute(
    id: number,
    attrs: BaseDto,
  ): Promise<Result<ResultTransaction | string>>;
}

import { Result } from './../../infra/http/http-result';
import { BaseDto } from '../../business/dto/requests/base-dto.dto';
import { ResultTransaction } from '../../business/types/transaction.type';

export interface IEditUseCase {
  execute(
    id: number,
    attrs: BaseDto,
  ): Promise<Result<ResultTransaction | string>>;
}

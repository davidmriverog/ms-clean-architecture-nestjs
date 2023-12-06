import { Result } from './../../infra/http/http-result';
import { ResultTransaction } from '../ports/types/transaction.type';

export interface IRemoveUseCase {
  execute(id: number): Promise<Result<ResultTransaction | string>>;
}

import { Result } from './../../infra/http/http-result';
import { BaseDto } from '../../business/dto/base-dto.dto';

export interface ICreateUseCase<I> {
  execute(attrs: BaseDto): Promise<Result<I | string>>;
}

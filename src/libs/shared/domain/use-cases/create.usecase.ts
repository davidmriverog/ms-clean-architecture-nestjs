import { Result } from '@shared/infrastructure/Result';
import { BaseDto } from '../dto/base-dto.dto';

export interface ICreateUseCase<I> {
  execute(attrs: BaseDto): Promise<Result<I | string>>;
}

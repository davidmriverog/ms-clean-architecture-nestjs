import { BaseDto } from '@shared/domain/dto/base-dto.dto';
import { IsNotEmpty } from 'class-validator';

export class RoleDto extends BaseDto {
  @IsNotEmpty()
  roleCode: string;

  @IsNotEmpty()
  description: string;
}

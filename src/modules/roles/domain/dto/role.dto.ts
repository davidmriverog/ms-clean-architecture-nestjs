import { BaseDto } from '@libs/business';
import { IsNotEmpty } from 'class-validator';

export class RoleDto extends BaseDto {
  @IsNotEmpty()
  roleCode: string;

  @IsNotEmpty()
  description: string;
}

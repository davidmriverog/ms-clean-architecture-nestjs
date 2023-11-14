import { IsNotEmpty } from 'class-validator';

export class RoleDto {
  @IsNotEmpty()
  roleCode: string;

  @IsNotEmpty()
  description: string;
}

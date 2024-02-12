import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PermissionBO {
  @Expose()
  @IsOptional()
  id: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsNotEmpty()
  code: string;

  @Expose()
  @IsOptional()
  description: string;

  @Expose()
  @IsOptional()
  createdAt: Date;

  @Expose()
  @IsOptional()
  updatedAt: Date;

  @Exclude()
  @IsOptional()
  deletedAt: Date;
}

import { Exclude, Expose } from 'class-transformer';

export class PermissionBO {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  code: string;

  @Expose()
  description: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: string;

  @Exclude()
  deletedAt: string;
}

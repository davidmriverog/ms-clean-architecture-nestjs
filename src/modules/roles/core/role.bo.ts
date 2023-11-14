import { Exclude, Expose } from 'class-transformer';

export class RoleBO {
  @Expose()
  readonly roleId: number;

  @Expose()
  readonly roleCode: string;

  @Expose()
  readonly description: string;

  @Expose()
  readonly createdAt: Date;

  @Expose()
  readonly updatedAt: Date;

  @Exclude()
  readonly deletedAt: Date;
}

import { Expose } from 'class-transformer';

export class PermissionBO {
  @Expose()
  name: string;

  @Expose()
  code: string;

  @Expose()
  description: string;
}

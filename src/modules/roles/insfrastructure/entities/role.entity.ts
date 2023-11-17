import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BaseEntity } from '@infra/common/base.entity';
import { ModelIdentity } from '@infra/decorators/identity/identity.decorator';

@Entity({
  name: 'roles',
})
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ModelIdentity()
  roleId: number;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', default: null })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp without time zone', default: null })
  deletedAt: Date;

  @Column({ type: 'varchar', length: 125 })
  description: string;

  @Column({ type: 'varchar', length: 125 })
  roleCode: string;
}

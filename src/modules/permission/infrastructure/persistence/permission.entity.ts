import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BaseEntity, ModelIdentity } from '@libs/infra';

@Entity({
  name: 'permissions',
})
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ModelIdentity()
  id: number;

  @Column({ type: 'varchar', length: 125 })
  name: string;

  @Column({ type: 'varchar', length: 125 })
  code: string;

  @Column({ type: 'varchar', length: 125, default: null })
  description: string;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', default: null })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp without time zone', default: null })
  deletedAt: Date;
}

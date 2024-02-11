import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ModelIdentity } from '@libs/infra';

@Entity({
  name: 'permissions',
})
export class Permission {
  @PrimaryGeneratedColumn()
  @ModelIdentity()
  id: number;

  @Column('varchar', { length: 125 })
  name: string;

  @Column('varchar', { length: 125, default: null })
  code: string;

  @Column('longtext', { default: null })
  description: string;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', default: null })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp without time zone', default: null })
  deletedAt: Date;
}

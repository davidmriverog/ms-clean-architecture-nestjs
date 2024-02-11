import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { EntityRepository } from '../ports/output/entity.repository';

@Injectable()
export class PostgresRepository<T> implements EntityRepository<T> {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly engineRepsitory: Repository<T>,
  ) {}

  async getAll(): Promise<T[]> {
    return await this.engineRepsitory.find();
  }
}

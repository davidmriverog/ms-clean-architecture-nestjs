import { IReaderORMPort } from './reader-orm.port';
import { ITransactionORM } from './transcation-orm.port';
import { IWriteORMPort } from './writer-orm.port';

export interface IBaseRepositoryPort<I, D>
  extends IWriteORMPort<I>,
    ITransactionORM<I, D>,
    IReaderORMPort<D> {}

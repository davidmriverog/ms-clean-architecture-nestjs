import { IReaderORMPort } from './reader-orm.port';
import { ITransactionORM } from './transcation-orm.port';
import { IWriteORMPort } from './writer-orm.port';

export interface IBaseORMPort<I, D>
  extends IWriteORMPort<I>,
    ITransactionORM<I, D>,
    IReaderORMPort<D> {}

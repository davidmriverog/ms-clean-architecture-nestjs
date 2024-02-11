export interface EntityRepository<T> {
  getAll(): Promise<T[]>;
}

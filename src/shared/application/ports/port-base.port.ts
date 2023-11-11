export interface BasePort<I> {
  findAll(): Promise<I[]>;
}

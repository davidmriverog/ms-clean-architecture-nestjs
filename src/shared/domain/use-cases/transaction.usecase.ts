export interface TransactionUseCase<D, I> {
  execute(attrs: I): Promise<D>;
}

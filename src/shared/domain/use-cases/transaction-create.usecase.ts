export interface TransactionCreateUseCase<D, I> {
  execute(attrs: I): Promise<D>;
}

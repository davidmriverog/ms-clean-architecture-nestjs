export interface TransactionUpdateUseCase<D, I> {
  execute(id: number, attrs: I): Promise<D>;
}

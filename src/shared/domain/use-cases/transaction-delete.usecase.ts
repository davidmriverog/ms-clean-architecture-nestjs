export interface TransactionRemoveUseCase<I> {
  execute(id: number): Promise<I>;
}

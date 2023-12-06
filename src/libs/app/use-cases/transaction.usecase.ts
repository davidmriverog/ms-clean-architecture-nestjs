export interface ITransactionUseCase<I, K> {
  execute(attrs: I): Promise<K>;
}

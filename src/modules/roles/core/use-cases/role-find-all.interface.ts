export interface GetAllRolesUseCase<I> {
  execute(): Promise<I[]>;
}

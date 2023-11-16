export interface IMapper<T, D> {
  entityToBO(from: T): D;
  dtoToEntity(from: any): T;
}

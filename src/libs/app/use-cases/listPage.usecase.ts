import { ListPageResponse } from '../../business/dto/responses/list-page.response';

export interface IListPageUseCase<I> {
  execute(page: number, limit: number): Promise<ListPageResponse<I>>;
}

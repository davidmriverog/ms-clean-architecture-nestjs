import { ListPageResponse } from '../../business/list-page.response';

export interface IListPageUseCase<I> {
  execute(page: number, limit: number): Promise<ListPageResponse<I>>;
}

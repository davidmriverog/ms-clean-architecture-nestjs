export class ListPageResponse<I> {
  page: number;
  limit: number;
  content: I[];
}

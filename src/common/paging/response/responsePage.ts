import { Expose } from 'class-transformer';

export class Page {
  @Expose()
  currentPage: number;

  @Expose()
  totalRecord: number;

  @Expose()
  perPage: number;
}

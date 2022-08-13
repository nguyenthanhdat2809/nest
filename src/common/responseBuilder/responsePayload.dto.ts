import { Expose } from 'class-transformer';

export class ResponsePayload<T> {
  @Expose()
  statusCode: number;

  @Expose()
  message?: string;

  @Expose()
  data?: T;
}

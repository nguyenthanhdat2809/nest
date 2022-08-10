import { Expose } from 'class-transformer';

export class ResponsePayloadDto<T> {
  @Expose()
  statusCode: number;

  @Expose()
  message?: string;

  @Expose()
  data?: T;
}

import { ResponsePayloadDto } from './responsePayload.dto';
import { ResponseCodeEnum } from '../../constant/noti-constant';

export class ResponseBuilder<T> {
  private payload: ResponsePayloadDto<T> = {
    statusCode: ResponseCodeEnum.SUCCESS,
  };

  constructor(data?: T) {
    this.payload.data = data;
  }

  withCode(code: ResponseCodeEnum): ResponseBuilder<T> {
    this.payload.statusCode = code;
    return this;
  }

  withMessage(message: string): ResponseBuilder<T> {
    this.payload.message = message;
    return this;
  }

  withData(data: T): ResponseBuilder<T> {
    this.payload.data = data;
    return this;
  }

  build(): ResponsePayloadDto<T> {
    return this.payload;
  }
}

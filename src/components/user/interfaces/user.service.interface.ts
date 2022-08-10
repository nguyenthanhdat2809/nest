import { GetAllUserDto } from '../dto/response/get-all-user.dto';
import { ResponsePayloadDto } from '../../../core/common/responseBuilder/responsePayload.dto';

export interface UserServiceInterface {
  findAllUser(): Promise<ResponsePayloadDto<GetAllUserDto[]>>;
}

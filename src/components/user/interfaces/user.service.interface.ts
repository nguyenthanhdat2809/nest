import { GetAllUserDto } from '../dto/response/get-all-user.dto';
import { ResponsePayloadDto } from '../../../common/responseBuilder/responsePayload.dto';
import { CreateNewUserDto } from '../dto/request/create-new-user.dto';

export interface UserServiceInterface {
  findAllUser(): Promise<ResponsePayloadDto<GetAllUserDto[]>>;
  createUser(createUser: CreateNewUserDto): Promise<ResponsePayloadDto<string>>;
}

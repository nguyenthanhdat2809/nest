import { GetAllUserDto } from '../dto/response/get-all-user.dto';
import { CreateNewUserDto } from '../dto/request/create-new-user.dto';
import { ResponsePayload } from '../../../common/responseBuilder/responsePayload.dto';

export interface UserServiceInterface {
  findAllUser(): Promise<ResponsePayload<GetAllUserDto[]>>;
  createUser(createUser: CreateNewUserDto): Promise<ResponsePayload<string>>;
}

import { Controller, Get, Inject } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { ApiTags } from '@nestjs/swagger';
import { ResponsePayloadDto } from '../../core/common/responseBuilder/responsePayload.dto';
import { GetAllUserDto } from './dto/response/get-all-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private userService: UserServiceInterface,
  ) {}

  @Get('/get-all')
  public async findAllUser(): Promise<ResponsePayloadDto<GetAllUserDto[]>> {
    return await this.userService.findAllUser();
  }
}

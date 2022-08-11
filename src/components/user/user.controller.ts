import { Body, Controller, Get, Inject, Post, UseInterceptors, UsePipes } from "@nestjs/common";
import { UserServiceInterface } from './interfaces/user.service.interface';
import { ApiTags } from '@nestjs/swagger';
import { ResponsePayloadDto } from '../../common/responseBuilder/responsePayload.dto';
import { GetAllUserDto } from './dto/response/get-all-user.dto';
import { CreateNewUserDto } from './dto/request/create-new-user.dto';
import { ValidationPipe } from '../../core/pipe/validation.pipe';
import { LoggingInterceptor } from '../../core/Interceptors/logging.interceptor';
import { User } from '../../core/decorators/user.decorator';

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

  @Post('/')
  @UseInterceptors(LoggingInterceptor)
  @UsePipes(ValidationPipe)
  public async createUser(@Body() @User() createUser: CreateNewUserDto): Promise<ResponsePayloadDto<string>> {
    return await this.userService.createUser(createUser);
  }
}

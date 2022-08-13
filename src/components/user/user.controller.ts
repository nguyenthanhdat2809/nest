import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { ApiTags } from '@nestjs/swagger';
import { GetAllUserDto } from './dto/response/get-all-user.dto';
import { CreateNewUserDto } from './dto/request/create-new-user.dto';
import { User } from '../../core/decorators/user.decorator';
import { ResponsePayload } from '../../common/responseBuilder/responsePayload.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private userService: UserServiceInterface,
  ) {}

  @Get('/get-all')
  public async findAllUser(): Promise<ResponsePayload<GetAllUserDto[]>> {
    return await this.userService.findAllUser();
  }

  @Post('/')
  public async createUser(
    @Body() @User() createUser: CreateNewUserDto,
  ): Promise<ResponsePayload<string>> {
    return await this.userService.createUser(createUser);
  }
}

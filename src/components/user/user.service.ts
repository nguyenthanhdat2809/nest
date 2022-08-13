import { Inject, Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { GetAllUserDto } from './dto/response/get-all-user.dto';
import { plainToInstance } from 'class-transformer';
import { ResponseBuilder } from '../../common/responseBuilder/responseBuilder.dto';
import { CreateNewUserDto } from './dto/request/create-new-user.dto';
import { UserEntity } from '../../entity/user/user.entity';
import { ResponsePayload } from '../../common/responseBuilder/responsePayload.dto';
import {
  getMessage,
  ResponseCodeEnum,
} from '../../constant/code-response-constant';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private userRepository: UserRepositoryInterface,
  ) {}

  async findAllUser(): Promise<ResponsePayload<GetAllUserDto[]>> {
    const users = await this.userRepository.getAllUsers();
    const response = plainToInstance(GetAllUserDto, users);
    return new ResponseBuilder<GetAllUserDto[]>()
      .withData(response)
      .withMessage(getMessage(ResponseCodeEnum.SUCCESS))
      .withCode(ResponseCodeEnum.SUCCESS)
      .build();
  }

  async createUser(
    createUser: CreateNewUserDto,
  ): Promise<ResponsePayload<string>> {
    const newUser = await this.userRepository.createUser(
      <UserEntity>createUser,
    );

    if (newUser) {
      return new ResponseBuilder<string>()
        .withData('Create successfully!')
        .withMessage(getMessage(ResponseCodeEnum.SUCCESS))
        .withCode(ResponseCodeEnum.SUCCESS)
        .build();
    } else {
      return new ResponseBuilder<string>()
        .withData('Create fail!!')
        .withMessage(getMessage(ResponseCodeEnum.BAD_REQUEST))
        .withCode(ResponseCodeEnum.BAD_REQUEST)
        .build();
    }
  }
}

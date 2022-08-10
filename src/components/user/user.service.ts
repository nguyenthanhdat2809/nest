import { Inject, Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { GetAllUserDto } from './dto/response/get-all-user.dto';
import { plainToInstance } from 'class-transformer';
import { ResponseBuilder } from '../../core/common/responseBuilder/responseBuilder.dto';
import { ResponsePayloadDto } from '../../core/common/responseBuilder/responsePayload.dto';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private userRepository: UserRepositoryInterface,
  ) {}

  async findAllUser(): Promise<ResponsePayloadDto<GetAllUserDto[]>> {
    const users = await this.userRepository.getAllUsers();
    const response = plainToInstance(GetAllUserDto, users);
    return new ResponseBuilder<GetAllUserDto[]>()
      .withData(response)
      .withMessage('success')
      .withCode(200)
      .build();
  }
}

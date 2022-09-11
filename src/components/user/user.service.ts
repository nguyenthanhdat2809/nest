import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { GetAllUserDto } from './dto/response/get-all-user.dto';
import { plainToInstance } from 'class-transformer';
import { ResponseBuilder } from '../../common/responseBuilder/responseBuilder.dto';
import { CreateNewUserDto } from './dto/request/create-new-user.dto';
import { UserEntity } from '../../entity/user/user.entity';
import { ResponsePayload } from '../../common/responseBuilder/responsePayload.dto';
import * as bcrypt from 'bcrypt';
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
    try {
      const users = await this.userRepository.findAll();

      const response = plainToInstance(GetAllUserDto, users);
      return new ResponseBuilder<GetAllUserDto[]>()
        .withData(response)
        .withMessage(getMessage(ResponseCodeEnum.SUCCESS))
        .withCode(ResponseCodeEnum.SUCCESS)
        .build();
    } catch (e) {
      throw new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }

  async createUser(
    request: CreateNewUserDto,
  ): Promise<ResponsePayload<string>> {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await this.hashPassword(salt, request.password);
      await this.userRepository.create({
        ...(<UserEntity>request),
        password: hash,
      });

      return new ResponseBuilder<string>()
        .withData('Create successfully!')
        .withMessage(getMessage(ResponseCodeEnum.SUCCESS))
        .withCode(ResponseCodeEnum.SUCCESS)
        .build();
    } catch (e) {
      throw new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }

  private async hashPassword(salt: string, password: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}

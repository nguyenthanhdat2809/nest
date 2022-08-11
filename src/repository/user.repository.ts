import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user/user.entity';
import { UserRepositoryInterface } from '../components/user/interfaces/user.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
@EntityRepository(UserEntity)
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.createQueryBuilder().getMany();
  }

  async createUser(createUser: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(createUser);
  }
}

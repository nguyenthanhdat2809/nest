import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user/user.entity';
import { UserRepositoryInterface } from '../components/user/interfaces/user.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractRepository } from '../core/repository/base.abstract.repository';

@Injectable()
@EntityRepository(UserEntity)
export class UserRepository
  extends BaseAbstractRepository<UserEntity>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}

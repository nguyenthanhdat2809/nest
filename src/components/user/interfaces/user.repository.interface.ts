import { UserEntity } from '../../../entity/user/user.entity';

export interface UserRepositoryInterface {
  getAllUsers(): Promise<UserEntity[]>;
  createUser(createUser: UserEntity): Promise<UserEntity>;
}

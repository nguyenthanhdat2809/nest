import { UserEntity } from '../../../entity/user/user.entity';
import { BaseInterfaceRepository } from '../../../core/repository/base.interface.repository';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<UserEntity> {
}

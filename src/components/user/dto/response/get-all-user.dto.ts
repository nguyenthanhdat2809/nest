import { Expose } from 'class-transformer';
import { IProfile } from '../../../../entity/user/interface/profile.interface';

export class GetAllUserDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  address: string;

  @Expose()
  profile: IProfile;
}

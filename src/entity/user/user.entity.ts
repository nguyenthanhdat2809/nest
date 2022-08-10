import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IProfile } from './interface/profile.interface';
import { GenderEnum } from './enum/gender.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public address: string;

  @Column()
  public gender: GenderEnum;

  @Column({ type: 'json' })
  public profile: IProfile;
}

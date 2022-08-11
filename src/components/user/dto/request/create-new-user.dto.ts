import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IProfile } from '../../../../entity/user/interface/profile.interface';
import { GenderEnum } from '../../../../entity/user/enum/gender.enum';

export class CreateNewUserDto {
  @IsString()
  @IsNotEmpty()
  @Transform((e) => {
    return typeof e.value === 'string' ? e.value.trim() : e.value;
  })
  @ApiProperty({ type: String, description: 'Email phải đúng định dạng' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @Transform((e) => {
    return typeof e.value === 'string' ? e.value.trim() : e.value;
  })
  @ApiProperty({ type: String, description: 'Password phải dài hơn 6 kí tự' })
  address: string;

  @IsNotEmpty()
  @IsEnum(GenderEnum)
  @ApiProperty({ type: String, description: '1 là nam, 0 là nữ' })
  gender: GenderEnum;

  @IsNotEmpty()
  @ApiProperty({ type: String, description: '1 là nam, 0 là nữ' })
  profile: IProfile;
}

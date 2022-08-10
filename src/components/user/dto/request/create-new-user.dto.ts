import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNewUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
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
}

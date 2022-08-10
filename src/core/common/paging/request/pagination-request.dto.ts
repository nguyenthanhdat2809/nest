import { Min, IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationParams {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @ApiProperty({
    example: 3,
    description: 'Số trang bạn muốn đến',
  })
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @ApiProperty({
    example: 3,
    description: 'Số phần tử bạn muốn hiển thị',
  })
  limit?: number;
}

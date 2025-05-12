import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

// Schema
export class AddMoreProductsDto {
  @IsInt()
  @ApiProperty()
  count: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  price?: number;

  @IsString()
  @ApiProperty()
  name: string;
}

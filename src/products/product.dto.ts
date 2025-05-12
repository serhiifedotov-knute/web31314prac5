import { ApiProperty } from '@nestjs/swagger';
// Data Transferable Object - DTO
export class ProductDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number; // price in cents
  @ApiProperty()
  count: number;
}

import {
  Body,
  Controller,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { ProductDto } from './product.dto';
import { AddMoreProductsDto } from './add-more-products.dto';
import { ProductsService } from './products.service';

// const productsCoontroller = new ProductsController(); // never call constructor
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /*
   *
   * server.get('products', (req,res)=>{
   * ......
   * });
   *
   *
   *
   */
  @Get()
  findProducts(): ProductDto[] {
    console.log(1);
    return this.productsService.findProducts();
  }

  // products/id/2
  @Put('id/:id')
  addMoreProducts(
    @Param('id') id: number,
    @Body() req: AddMoreProductsDto,
  ): ProductDto {
    return this.productsService.addMoreProducts(id, req);
  }
}

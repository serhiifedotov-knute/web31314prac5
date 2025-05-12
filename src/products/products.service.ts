import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddMoreProductsDto } from './add-more-products.dto';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductsService {
  private data: ProductDto[];

  constructor(@Inject('PRODUCTS_COUNT') productsCount: number) {
    this.data = Array(productsCount)
      .fill(0)
      .map((_, idx) => {
        return {
          id: idx,
          name: `Product_${idx}`,
          price: Math.round(Math.random() * 1000) + 10,
          count: Math.round(Math.random() * 50),
        };
      });

      console.log(this.data);
  }

  findProducts(): ProductDto[] {
    return this.data;
  }

  addMoreProducts(id: number, req: AddMoreProductsDto): ProductDto {
    const foundProduct = this.data.find((product) => product.id == id);
    if (foundProduct) {
      foundProduct.count += req.count;
    } else {
      throw new NotFoundException(`cannot find product with id: ${id}`);
    }
    return foundProduct;
  }
}

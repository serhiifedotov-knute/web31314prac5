import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

// bike.module.ts
//
// imports:[WheelModule, BrakesModules, SteeringWheel, CorpusModule]

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    // {
    //   provide: ProductsService,
    //   useValue: new ProductsService(10),
    // },
    {
      provide: 'PRODUCTS_COUNT',
      useValue: 25,
    },
  ],
})
export class ProductsModule {}

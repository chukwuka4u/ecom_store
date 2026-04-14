import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Seller } from '../sellers/entities/seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Seller])],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}

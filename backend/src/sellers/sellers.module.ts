import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersResolver } from './sellers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seller, Product])],
  providers: [SellersResolver, SellersService],
})
export class SellersModule {}

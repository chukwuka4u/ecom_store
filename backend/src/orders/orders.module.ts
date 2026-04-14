import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderedProduct } from './entities/orderedProduct.entity';
import { Record } from '../records/entities/record.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderedProduct, Record, Product])],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}

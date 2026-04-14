import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsResolver } from './records.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
import { Order } from '../orders/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record, Order])],
  providers: [RecordsResolver, RecordsService],
})
export class RecordsModule {}

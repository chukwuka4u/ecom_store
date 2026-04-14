import { Module } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { BuyersResolver } from './buyers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buyer } from './entities/buyer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer])],
  providers: [BuyersResolver, BuyersService],
})
export class BuyersModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Buyer } from '../buyers/entities/buyer.entity';
import { Seller } from '../sellers/entities/seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Buyer, Seller])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}

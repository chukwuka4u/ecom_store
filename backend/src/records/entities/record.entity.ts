import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Entity, OneToMany, Column, ManyToOne } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { User } from '../../users/entities/user.entity';
import { Buyer } from '../../buyers/entities/buyer.entity';

@ObjectType()
@Entity()
export class Record {
  @Field(() => String, { description: 'The unique identifier of the record' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  /// List of order IDs associated with this record
  @Field(() => [Order]!)
  @OneToMany(() => Order, order => order.record)
  orders!: Order[];

  /// Association to the User, who own the orders in this record
  // @Field(() => User)
  // @ManyToOne(() => Buyer, buyer => buyer.records, {nullable: true})
  // user!: Buyer;
}

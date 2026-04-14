import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { OrderedProduct } from './orderedProduct.entity';
import { Record } from '../../records/entities/record.entity';

@ObjectType()
@Entity()
export class Order {
  @Field(() => String, { description: 'The unique identifier of the order' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column('decimal')
  totalAmount!: number;

  @Field()
  @Column()
  orderDate!: Date;

  @Field(() => [OrderedProduct]!)
  @OneToMany(() => OrderedProduct, orderedProduct => orderedProduct.order)
  orderedProducts!: OrderedProduct[];

  @Field(() => Record, { nullable: true })
  @ManyToOne(() => Record, record => record.orders, { nullable: true })
  record?: Record;
}

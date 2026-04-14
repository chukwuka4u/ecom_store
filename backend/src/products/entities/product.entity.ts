import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { Seller } from '../../sellers/entities/seller.entity';

@ObjectType()
@Entity()
export class Product {
  @Field(() => String, { description: 'The unique identifier of the product' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Field()
  @Column()
  img!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column('decimal')
  price!: number;

  @Field({description: "amount of product of in stock"})
  @Column()
  stock!: number;

  @Field(() => Seller)
  @ManyToOne(() => Seller, seller => seller.products)
  seller!: Seller;
}

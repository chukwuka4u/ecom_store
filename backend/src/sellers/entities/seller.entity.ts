import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@ObjectType()
@Entity()
export class Seller {
  @Field(() => String, { description: 'The unique identifier of the seller' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  brandName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  logoImg?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  brandImg?: string;

  @Field(() => [Product])
  @OneToMany(() => Product, (product) => product.seller)
  products!: Product[];
}

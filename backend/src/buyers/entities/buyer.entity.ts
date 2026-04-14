import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Buyer {
  @Field(() => String, { description: 'The unique identifier of the buyer' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  shippingAddress?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;
}

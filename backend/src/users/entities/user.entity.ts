import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Buyer } from '../../buyers/entities/buyer.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Seller } from '../../sellers/entities/seller.entity';

export enum UserProfileType {
  BUYER = 'buyer',
  SELLER = 'seller',
}

registerEnumType(UserProfileType, { name: 'UserProfileType' });

@ObjectType()
@Entity()
export class User {
  /*
    id
    email
    password
    name
    buyerOrSeller (one-to-one relationship with Buyer or Seller entity)
  */
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field()
  @Column()
  name!: string;

  //profile type, buyer or seller
  @Field(() => UserProfileType, { description: 'The profile type of the user' })
  @Column({ type: 'enum', enum: UserProfileType, default: UserProfileType.BUYER })
  profileType!: UserProfileType;

  //association to buyer, nullable
  @Field(() => Buyer, { nullable: true})
  @OneToOne(() => Buyer, { nullable: true, eager: true})
  @JoinColumn()
  buyer?: Buyer;

  //association to seller, nullable
  @Field(() => Seller, { nullable: true })
  @OneToOne(() => Seller, { nullable: true, eager: true})
  @JoinColumn()
  seller?: Seller;
}

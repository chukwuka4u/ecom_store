import { InputType, Field } from '@nestjs/graphql';
import { UserProfileType } from '../entities/user.entity';
import { CreateBuyerInput } from '../../buyers/dto/create-buyer.input';
import { CreateSellerInput } from '../../sellers/dto/create-seller.input';

@InputType()
export class CreateUserInput {
  /*
    id
    email
    password
    name
    buyerOrSeller (one-to-one relationship with Buyer or Seller entity)
  */
  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  buyer?: CreateBuyerInput;

  @Field({ nullable: true })
  seller?: CreateSellerInput;

  @Field()
  profileType!: UserProfileType;
}

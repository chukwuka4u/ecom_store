import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBuyerInput {
  @Field({ nullable: true })
  shippingAddress?: string;

  @Field({ nullable: true })
  phone?: string;
}

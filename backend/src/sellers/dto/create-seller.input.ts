import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSellerInput {
  @Field({ nullable: true })
    brandName?: string;
  
    @Field({ nullable: true })
    logoImg?: string;
  
    @Field({ nullable: true })
    brandImg?: string;
}

import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "../../products/entities/product.entity";

@ObjectType()
@Entity()
export class OrderedProduct {
  /*
    id
    productId
    quantity
  */

    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @ManyToOne(() => Product, { eager: true })
    product!: Product;

    @Field()
    @Column()
    quantity!: number;

    @Field(() => Order)
    @ManyToOne(() => Order, order => order.orderedProducts)
    order!: Order;
}
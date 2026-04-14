import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserProfileType } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Buyer } from '../buyers/entities/buyer.entity';
import { Seller } from '../sellers/entities/seller.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Buyer) private buyersRepository: Repository<Buyer>,
    @InjectRepository(Seller) private sellersRepository: Repository<Seller>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    let buyer: Buyer | undefined = undefined;
    let seller: Seller | undefined = undefined;

    // Create buyer if provided
    if (createUserInput.buyer) {
      buyer = this.buyersRepository.create(createUserInput.buyer);
      buyer = await this.buyersRepository.save(buyer);
    }

    // Create seller if provided
    if (createUserInput.seller) {
      seller = this.sellersRepository.create(createUserInput.seller);
      seller = await this.sellersRepository.save(seller);
    }

    // Create user with buyer/seller relationship
    const newUser = this.usersRepository.create({
      email: createUserInput.email,
      password: createUserInput.password,
      name: createUserInput.name,
      profileType: buyer
        ? UserProfileType.BUYER
        : seller
          ? UserProfileType.SELLER
          : undefined,
      buyer: buyer,
      seller: seller,
    });

    return await this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

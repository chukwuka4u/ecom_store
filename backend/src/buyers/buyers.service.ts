import { Injectable } from '@nestjs/common';
import { CreateBuyerInput } from './dto/create-buyer.input';
import { UpdateBuyerInput } from './dto/update-buyer.input';

@Injectable()
export class BuyersService {
  create(createBuyerInput: CreateBuyerInput) {
    return 'This action adds a new buyer';
  }

  findAll() {
    return `This action returns all buyers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buyer`;
  }

  update(id: number, updateBuyerInput: UpdateBuyerInput) {
    return `This action updates a #${id} buyer`;
  }

  remove(id: number) {
    return `This action removes a #${id} buyer`;
  }
}

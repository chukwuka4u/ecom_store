import { Test, TestingModule } from '@nestjs/testing';
import { BuyersResolver } from './buyers.resolver';
import { BuyersService } from './buyers.service';

describe('BuyersResolver', () => {
  let resolver: BuyersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyersResolver, BuyersService],
    }).compile();

    resolver = module.get<BuyersResolver>(BuyersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

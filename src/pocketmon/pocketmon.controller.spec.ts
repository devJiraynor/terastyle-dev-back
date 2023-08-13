import { Test, TestingModule } from '@nestjs/testing';
import { PocketmonController } from './pocketmon.controller';

describe('PocketmonController', () => {
  let controller: PocketmonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PocketmonController],
    }).compile();

    controller = module.get<PocketmonController>(PocketmonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

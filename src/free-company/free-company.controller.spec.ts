import { Test, TestingModule } from '@nestjs/testing';
import { FreeCompanyController } from './free-company.controller';

describe('FreeCompanyController', () => {
    let controller: FreeCompanyController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FreeCompanyController],
        }).compile();

        controller = module.get<FreeCompanyController>(FreeCompanyController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

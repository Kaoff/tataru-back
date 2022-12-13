import { Test, TestingModule } from '@nestjs/testing';
import { FreeCompanyService } from './free-company.service';

describe('FreeCompanyService', () => {
    let service: FreeCompanyService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FreeCompanyService],
        }).compile();

        service = module.get<FreeCompanyService>(FreeCompanyService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

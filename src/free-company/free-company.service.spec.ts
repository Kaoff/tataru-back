import { Test, TestingModule } from '@nestjs/testing';
import { FreeCompanyService } from './free-company.service';
import { v4 as uuid } from 'uuid';
import { PrismaService } from '../prisma/prisma.service';

const testName = 'Test Company 1';
const testEmblems = ['', '', ''];
const ownerId = uuid();

const fcArray = [
    {
        emblemUrls: testEmblems,
        name: testName,
        ownerId,
    },
    {
        emblemUrls: testEmblems,
        name: 'Test Company 2',
        ownerId,
    },
    {
        emblemUrls: testEmblems,
        name: 'Test Company 3',
        ownerId,
    },
];

const db = {
    freeCompany: {
        create: jest.fn().mockResolvedValue(fcArray[0]),
        findMany: jest.fn().mockResolvedValue(fcArray),
        findUnique: jest.fn().mockResolvedValue(fcArray[0]),
    },
};

describe('FreeCompanyService', () => {
    let service: FreeCompanyService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FreeCompanyService,
                {
                    provide: PrismaService,
                    useValue: db,
                },
            ],
        }).compile();

        service = module.get<FreeCompanyService>(FreeCompanyService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should successfully create a freeCompany', () => {
            expect(
                service.create({
                    name: testName,
                    emblemUrls: testEmblems,
                    ownerId,
                }),
            ).resolves.toEqual(fcArray[0]);
        });
    });

    describe('findAll', () => {
        it('should return all freeCompanies', async () => {
            const fcs = await service.findAll({});
            expect(fcs).toEqual(fcArray);
        });
    });

    describe('findOne', () => {
        it('should return a freeCompany with correct id', async () => {
            const fc = await service.findOne(uuid());
            expect(fc).toEqual(fcArray[0]);
        });
    });
});

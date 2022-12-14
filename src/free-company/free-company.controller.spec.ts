import { Test, TestingModule } from '@nestjs/testing';
import { FreeCompanyController } from './free-company.controller';
import { FreeCompanyService } from './free-company.service';
import { v4 as uuid } from 'uuid';
import { CreateFreeCompanyDto } from './dto/create-free-company.dto';

const freeCompanyId = uuid();
const name = 'Free company name';
const emblemUrls = ['', '', ''];
const ownerId = uuid();

describe('FreeCompanyController', () => {
    let controller: FreeCompanyController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FreeCompanyController],
            providers: [
                {
                    provide: FreeCompanyService,
                    useValue: {
                        findAll: jest.fn().mockResolvedValue([
                            {
                                id: 'id1',
                                emblemUrls,
                                name: 'Test Company 1',
                                ownerId,
                            },
                            {
                                id: 'id2',
                                emblemUrls,
                                name: 'Test Company 2',
                                ownerId,
                            },
                            {
                                id: 'id3',
                                emblemUrls,
                                name: 'Test Company 3',
                                ownerId,
                            },
                        ]),
                        findOne: jest.fn().mockImplementation((id: string) =>
                            Promise.resolve({
                                id,
                                emblemUrls,
                                name,
                                ownerId,
                            }),
                        ),
                        create: jest
                            .fn()
                            .mockImplementation((dto: CreateFreeCompanyDto) =>
                                Promise.resolve({
                                    id: freeCompanyId,
                                    ...dto,
                                }),
                            ),
                    },
                },
            ],
        }).compile();

        controller = module.get<FreeCompanyController>(FreeCompanyController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of freeCompanies', async () => {
            await expect(controller.findAll({})).resolves.toEqual([
                {
                    id: 'id1',
                    emblemUrls,
                    name: 'Test Company 1',
                    ownerId,
                },
                {
                    id: 'id2',
                    emblemUrls,
                    name: 'Test Company 2',
                    ownerId,
                },
                {
                    id: 'id3',
                    emblemUrls,
                    name: 'Test Company 3',
                    ownerId,
                },
            ]);
        });
    });

    describe('findOne', () => {
        it('should return a single freeCompany with correct id', async () => {
            await expect(controller.findOne('uuid')).resolves.toEqual({
                id: 'uuid',
                emblemUrls,
                name,
                ownerId,
            });
            await expect(controller.findOne('other uuid')).resolves.toEqual({
                id: 'other uuid',
                emblemUrls,
                name,
                ownerId,
            });
        });
    });

    describe('create', () => {
        it('should return the created freeCompany', async () => {
            const dto: CreateFreeCompanyDto = {
                name,
                emblemUrls,
                ownerId,
            };

            await expect(controller.create(dto)).resolves.toEqual({
                id: freeCompanyId,
                ...dto,
            });
        });
    });
});

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FreeCompany } from './schemas/free-company.schema';
import { FreeCompanyService } from './free-company.service';

@Controller('free-company')
export class FreeCompanyController {
    constructor(private freeCompaniesService: FreeCompanyService) {}

    @Get()
    async findAll(): Promise<FreeCompany[]> {
        return this.freeCompaniesService.findAll();
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<FreeCompany> {
        return this.freeCompaniesService.findOneById(params.id);
    }

    @Post()
    async create(@Body() body): Promise<FreeCompany> {
        return this.freeCompaniesService.create(body);
    }
}

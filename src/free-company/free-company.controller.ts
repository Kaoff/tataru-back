import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FreeCompany } from '@prisma/client';
import { FreeCompanyService } from './free-company.service';

@Controller('free-company')
export class FreeCompanyController {
    constructor(private freeCompaniesService: FreeCompanyService) {}

    @Get()
    async findAll(@Body() body): Promise<FreeCompany[]> {
        return this.freeCompaniesService.freeCompanies(body);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<FreeCompany> {
        return this.freeCompaniesService.freeCompany(params);
    }

    @Post()
    async create(@Body() body): Promise<FreeCompany> {
        return this.freeCompaniesService.create(body);
    }
}

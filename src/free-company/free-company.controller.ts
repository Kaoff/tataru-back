import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FreeCompany } from '@prisma/client';
import { CreateFreeCompanyDto } from './dto/create-free-company.dto';
import { UpdateFreeCompanyDto } from './dto/update-free-company.dto';
import { FreeCompanyService } from './free-company.service';

@Controller('free-company')
export class FreeCompanyController {
    constructor(private readonly freeCompaniesService: FreeCompanyService) {}

    @Get()
    async findAll(@Body() body): Promise<FreeCompany[]> {
        return this.freeCompaniesService.findAll(body);
    }

    @Get(':id')
    async findOne(@Param() params): Promise<FreeCompany> {
        return this.freeCompaniesService.findOne(params);
    }

    @Post()
    async create(@Body() body: CreateFreeCompanyDto): Promise<FreeCompany> {
        return this.freeCompaniesService.create(body);
    }

    @Patch(':id')
    async update(
        @Param() params,
        @Body() body: UpdateFreeCompanyDto,
    ): Promise<FreeCompany> {
        return this.freeCompaniesService.update(params.id, body);
    }
}

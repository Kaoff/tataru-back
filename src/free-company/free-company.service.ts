import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FreeCompany, Prisma } from '@prisma/client';
import { CreateFreeCompanyDto } from './dto/create-free-company.dto';

@Injectable()
export class FreeCompanyService {
    constructor(private prisma: PrismaService) {}

    create(dto: CreateFreeCompanyDto): Promise<FreeCompany> {
        return this.prisma.freeCompany.create({
            data: dto,
        });
    }

    findAll(params?: {
        skip?: number;
        take?: number;
        cursor?: Prisma.FreeCompanyWhereUniqueInput;
        where?: Prisma.FreeCompanyWhereInput;
        orderBy?: Prisma.FreeCompanyOrderByWithRelationInput;
    }): Promise<FreeCompany[]> {
        return this.prisma.freeCompany.findMany(params);
    }

    findOne(id: string): Promise<FreeCompany> {
        return this.prisma.freeCompany.findUnique({
            where: { id },
        });
    }
}

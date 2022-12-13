import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FreeCompany, Prisma } from '@prisma/client';

@Injectable()
export class FreeCompanyService {
    constructor(private prisma: PrismaService) {}

    create(data: Prisma.FreeCompanyCreateInput): Promise<FreeCompany> {
        return this.prisma.freeCompany.create({ data });
    }

    freeCompanies(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.FreeCompanyWhereUniqueInput;
        where?: Prisma.FreeCompanyWhereInput;
        orderBy?: Prisma.FreeCompanyOrderByWithRelationInput;
    }): Promise<FreeCompany[]> {
        const { skip, take, cursor, where, orderBy } = params;

        return this.prisma.freeCompany.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    freeCompany(
        where: Prisma.FreeCompanyWhereUniqueInput,
    ): Promise<FreeCompany> {
        return this.prisma.freeCompany.findUnique({
            where,
        });
    }
}

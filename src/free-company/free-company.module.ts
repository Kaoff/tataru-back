import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FreeCompanyController } from './free-company.controller';
import { FreeCompanyService } from './free-company.service';

@Module({
    imports: [PrismaModule],
    controllers: [FreeCompanyController],
    providers: [FreeCompanyService],
})
export class FreeCompanyModule {}

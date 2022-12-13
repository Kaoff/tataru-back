import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FreeCompanyController } from './free-company.controller';
import { FreeCompanyService } from './free-company.service';
import { FreeCompany, FreeCompanySchema } from './schemas/free-company.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: FreeCompany.name, schema: FreeCompanySchema },
        ]),
    ],
    controllers: [FreeCompanyController],
    providers: [FreeCompanyService],
})
export class FreeCompanyModule {}

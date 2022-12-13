import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreeCompanyModule } from './free-company/free-company.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [FreeCompanyModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}

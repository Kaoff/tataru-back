import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreeCompanyModule } from './free-company/free-company.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';

@Module({
    imports: [FreeCompanyModule, PrismaModule],
    controllers: [AppController, CharacterController],
    providers: [AppService, PrismaService, CharacterService],
})
export class AppModule {}

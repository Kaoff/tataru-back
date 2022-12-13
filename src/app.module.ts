import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreeCompanyModule } from './free-company/free-company.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        FreeCompanyModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

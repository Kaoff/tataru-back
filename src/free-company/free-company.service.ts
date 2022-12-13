import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFreeCompanyDTO } from './dto/create-free-company.dto';
import {
    FreeCompany,
    FreeCompanyDocument,
} from './schemas/free-company.schema';

@Injectable()
export class FreeCompanyService {
    constructor(
        @InjectModel(FreeCompany.name)
        private freeCompanyModel: Model<FreeCompanyDocument>,
    ) {}

    create(fcDto: CreateFreeCompanyDTO): Promise<FreeCompany> {
        const createdFc = new this.freeCompanyModel(fcDto);
        return createdFc.save();
    }

    findAll(): Promise<FreeCompany[]> {
        return this.freeCompanyModel.find().exec();
    }

    findOneById(id: string): Promise<FreeCompany> {
        return this.freeCompanyModel.findById(id).exec();
    }
}

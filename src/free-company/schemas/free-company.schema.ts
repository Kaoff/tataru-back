import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type FreeCompanyDocument = HydratedDocument<FreeCompany>;

@Schema()
export class FreeCompany {
    @Prop({ type: String, default: () => uuid() })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    emblemUrls: string[];
}

export const FreeCompanySchema = SchemaFactory.createForClass(FreeCompany);

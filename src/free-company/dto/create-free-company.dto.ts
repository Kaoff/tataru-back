import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsString,
    IsUrl,
} from 'class-validator';

export class CreateFreeCompanyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsArray()
    @ArrayMinSize(3)
    @ArrayMaxSize(3)
    @IsUrl({}, { each: true })
    emblemUrls?: string[];

    @IsString()
    @IsNotEmpty()
    ownerId: string;
}

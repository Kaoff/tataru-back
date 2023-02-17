import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsOptional,
    IsString,
    IsUrl,
} from 'class-validator';

export class UpdateFreeCompanyDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsArray()
    @ArrayMinSize(3)
    @ArrayMaxSize(3)
    @IsUrl({}, { each: true })
    @IsOptional()
    emblemUrls?: string[];
}

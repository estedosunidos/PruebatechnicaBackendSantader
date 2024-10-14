/* eslint-disable prettier/prettier */
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UploadCandidatesDto {
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    seniority: string;

    @IsNumber()
    yearsOfExperience: number;

    @IsBoolean()
    availability: boolean;
}

/* eslint-disable prettier/prettier */


import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UploadCandidatesDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsString()
  seniority: string;

  @IsNotEmpty()
  @IsInt()
  yearsOfExperience: number;

  @IsNotEmpty()
  @IsBoolean()
  availability: boolean;
}

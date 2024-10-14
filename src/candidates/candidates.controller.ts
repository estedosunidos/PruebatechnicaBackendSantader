/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CandidateService } from './service/CandidatesService ';
import { UploadCandidatesDto } from './dto/CreateCandidateDto ';


@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidateService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) 
  async uploadCandidates(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UploadCandidatesDto,
  ) {

   
    await this.candidatesService.loadCandidatesFromExcel(file);
    

    console.log('Datos JSON:', body);
    
    return { message: 'Candidates uploaded successfully!', data: body };
  }
}

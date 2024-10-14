/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';


import { CandidatesController } from './candidates.controller';
import { CandidateService } from './service/CandidatesService ';


@Module({
  controllers: [CandidatesController],
  providers: [CandidateService],
})
export class CandidatesModule {}

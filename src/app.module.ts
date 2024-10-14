/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesController } from './candidates/candidates.controller';
import { CandidatesModule } from './candidates/Candidates.module';
import { CandidateService } from './candidates/service/CandidatesService ';

@Module({
  imports: [CandidatesModule],
  controllers: [AppController, CandidatesController],
  providers: [AppService,CandidateService],
})
export class AppModule {}

import { HttpModule, Module } from '@nestjs/common';
import { CandidateController } from './controllers/candidate';
import { CandidateService } from './services/candidate';

@Module({
  imports: [HttpModule],
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class AppModule {}

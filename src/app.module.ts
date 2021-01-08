import { Module } from '@nestjs/common';
import { CandidatesController } from './controllers/candidates';
import { CandidatesService } from './services/candidates';

@Module({
  imports: [],
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class AppModule {}

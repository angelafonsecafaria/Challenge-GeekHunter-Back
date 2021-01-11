import { Get, Controller } from '@nestjs/common';
import { CandidateService } from '../services/candidate';
import { CandidateDetails } from '../util/interfaces/candidate';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidatesService: CandidateService) {}

  @Get()
  async getAllCandidates(): Promise<Array<CandidateDetails>> {
    return this.candidatesService.getAllCandidates();
  }
}
import { Get, Controller } from '@nestjs/common';
import { CandidatesService } from '../services/candidates';
import { CandidatesDetails } from '../util/interfaces/candidates';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  async findAll(): Promise<Array<CandidatesDetails>> {
    return this.candidatesService.getAllCandidates();
  }
}
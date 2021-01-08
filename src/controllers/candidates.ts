import { Get, Controller } from '@nestjs/common';
import { CandidatesService } from 'src/services/candidates';
import { CandidatesDetails } from 'src/util/interfaces/candidates';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  async findAll(): Promise<CandidatesDetails[]> {
    return this.candidatesService.findAll();
  }
}
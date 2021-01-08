import { Injectable } from '@nestjs/common';
import { CandidatesDetails } from 'src/util/interfaces/candidates';

@Injectable()
export class CandidatesService {
  private readonly candidates: CandidatesDetails[] = [];

  findAll(): CandidatesDetails[] {
    return this.candidates;
  }
}
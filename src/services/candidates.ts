import { Injectable } from '@nestjs/common';
import { CandidatesDetails } from 'src/util/interfaces/candidates';
import { Candidates } from 'src/data/candidates';

@Injectable()
export class CandidatesService {
    private readonly candidates: CandidatesDetails[] = Candidates.candidates;

    findAll(): CandidatesDetails[] {
        return this.candidates;
    }
}
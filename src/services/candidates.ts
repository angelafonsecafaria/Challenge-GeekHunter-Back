import { Injectable } from '@nestjs/common';
import { CandidatesDetails } from '../util/interfaces/candidates';
import data from '../data/code_challenge.json';

@Injectable()
export class CandidatesService {
    private readonly candidates: Array<CandidatesDetails> = data.candidates;

    async getAllCandidates(): Promise<CandidatesDetails[]>  {
        return this.candidates;
    }
}
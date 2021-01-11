import { Injectable } from '@nestjs/common';
import { CandidateDetails } from '../util/interfaces/candidate';
import data from '../data/code_challenge.json';

@Injectable()
export class CandidateService {
    private readonly candidates: Array<CandidateDetails> = [];

    constructor() {
        this.candidates = data.candidates;
    }

    async getAllCandidates(): Promise<Array<CandidateDetails>> {
        return data.candidates;
    }
}
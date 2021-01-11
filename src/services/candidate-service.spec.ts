import { CandidateService } from "../services/candidate";
import { mockCandidate } from "../data/candidate";

describe('CandidateService', () => {
    test('should be list all candidates success', async () => {
        const sut = new CandidateService();
        jest.spyOn(sut, 'getAllCandidates').mockReturnValueOnce(new Promise(resolve => resolve([mockCandidate()])));
        const candidates = await sut.getAllCandidates();
        expect(candidates).toHaveLength(1);
        expect(candidates).toEqual([mockCandidate()]);
    });
});
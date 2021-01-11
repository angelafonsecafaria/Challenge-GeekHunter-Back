import { CandidatesService } from "../services/candidates";
import { CandidatesController } from "./candidates";

describe('CandidateController', () => {
    let candidateController: CandidatesController;
    let candidateService: CandidatesService;

    beforeEach(() => {
        candidateService = new CandidatesService();
        candidateController = new CandidatesController(candidateService);
    });

    test('should return an array of candidates success', async () => {
        const result: Array<any> = ['test'];
        jest.spyOn(candidateService, 'getAllCandidates').mockImplementation(async (): Promise<any> => Promise.resolve(result));
        expect(await candidateController.getAllCandidates()).toBe(result);
    });
});
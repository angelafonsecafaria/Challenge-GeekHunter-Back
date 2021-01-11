import { CandidateService } from "../services/candidate";
import { CandidateController } from "./candidate";
import { Test, TestingModule } from '@nestjs/testing';
import { mockCandidate } from "../data/candidate";

describe('CandidateController', () => {
    let controller: CandidateController;
    let service: CandidateService;

    beforeEach(async () => {
        const mockService = {
            getAllCandidates: jest.fn(),
        }

        const module: TestingModule = await Test.createTestingModule({
            controllers: [CandidateController],
            providers: [
                {
                    provide: CandidateService,
                    useValue: mockService
                }
            ]
        }).compile();

        controller = module.get<CandidateController>(CandidateController);
        service = module.get<CandidateService>(CandidateService);
    });

    test('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll()', () => {
        test('should array CandidateService getAllCandidates', async () => {
            const findSpy = jest.spyOn(service, 'getAllCandidates');
            await controller.getAllCandidates();
            expect(findSpy).toHaveBeenCalled()
        });

        test('should throw if CandidateService get all throws', async () => {
            jest.spyOn(service, 'getAllCandidates').mockRejectedValueOnce(new Error());
            await expect(controller.getAllCandidates()).rejects.toThrow(new Error());
        });

        test('should return candidates on success', async () => {
            const mockReturn = [mockCandidate()]
            jest.spyOn(service, 'getAllCandidates').mockResolvedValueOnce(mockReturn);
            const response = await controller.getAllCandidates();
            expect(response).toEqual(mockReturn);
        });
    });
});
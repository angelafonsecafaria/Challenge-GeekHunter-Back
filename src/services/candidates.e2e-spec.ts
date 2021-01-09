import { Test, TestingModule } from '@nestjs/testing';
import { Candidates } from '../data/candidates';
import { CandidatesDetails } from '../util/interfaces/candidates';
import { CandidatesService } from '../services/candidates';

describe('CandidatesService', () => {
    let service: CandidatesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CandidatesService]
        }).compile();

        service = module.get<CandidatesService>(CandidatesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it("GET success", async () => {
        const candidates: Array<CandidatesDetails> = await Candidates.candidates;
        expect(candidates[0]).toEqual(
            {
                id: 31562,
                city: "Rio de Janeiro - RJ",
                experience: "12+ years",
                technologies: [
                    {
                        name: "Java",
                        is_main_tech: true
                    },
                    {
                        name: "Python",
                        is_main_tech: false
                    },
                    {
                        name: "Java (Android)",
                        is_main_tech: false
                    },
                    {
                        name: "Ruby",
                        is_main_tech: false
                    },
                    {
                        name: "Objective-C (iOS)",
                        is_main_tech: false
                    },
                    {
                        name: "Ruby on Rails",
                        is_main_tech: false
                    },
                    {
                        name: "Hibernate",
                        is_main_tech: false
                    },
                    {
                        name: "Linux",
                        is_main_tech: false
                    },
                    {
                        name: "Web Services",
                        is_main_tech: false
                    },
                    {
                        name: "RESTful",
                        is_main_tech: false
                    },
                    {
                        name: "Docker",
                        is_main_tech: false
                    },
                    {
                        name: "Elasticsearch",
                        is_main_tech: false
                    },
                    {
                        name: "Node.js",
                        is_main_tech: true
                    },
                    {
                        name: "Spring",
                        is_main_tech: false
                    }
                ]
            },
        );
    });
});
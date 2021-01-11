import { CandidateDetails } from "../util/interfaces/candidate";

export const mockCandidate = (): CandidateDetails => ({
    id: 1,
    city: 'valid_city',
    experience: 'valid_experience',
    technologies: [
        {
            name: 'valid_name',
            is_main_tech: true
        }
    ]
})
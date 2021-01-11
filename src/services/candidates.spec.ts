class ApiServiceMock {
    getAllCandidates() {
        return [
            {
                id: 'valid_id',
                city: 'valid_city',
                experience: 'valid_experience',
                technologies: [
                    {
                        name: 'valid_name',
                        is_main_tech: true
                    }
                ]
            }
        ]
    }
}

describe('CandidateService', () => {
    test('Should return Candidates on success', async () => {
        const sut = new ApiServiceMock();
        const candidates = await sut.getAllCandidates();
        expect(candidates).toEqual([
            {
                id: 'valid_id',
                city: 'valid_city',
                experience: 'valid_experience',
                technologies: [
                    {
                        name: 'valid_name',
                        is_main_tech: true
                    }
                ]
            }
        ]);
    });
});
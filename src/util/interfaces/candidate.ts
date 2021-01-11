export class CandidateDetails {
    readonly id: number;
    readonly city: string;
    readonly experience: string;
    readonly technologies: Technologies[]
}

export class Technologies {
    readonly name: string;
    readonly is_main_tech: boolean
}
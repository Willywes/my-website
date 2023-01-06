export type Job = {
    title: string;
    company: {
        name: string;
        url: string;
    };
    location: string;
    period: {
        from: Date;
        to: Date | null;
    };
    aptitudes: string[];
    description: string;
};

export type Education = {
    title: string;
    institution: {
        name: string;
        url: string;
    };
    location: string;
    period: {
        from: Date;
        to: Date | null;
    };
    description?: string;
};

export type Certification = {
    title: string;
    institution: {
        name: string;
        url: string;
        code?: string;
    };
    date: Date;
    description?: string;
};

export type Skill = {
    name: string;
    level: number;
};

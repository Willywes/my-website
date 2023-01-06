export type Section = {
    id: string;
    title: string;
};

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

export type Post = {
    title: string;
    link: string;
    author: string;
    published: number;
    created: number;
    category: string[];
    content: string;
};

export type Repository = {
    name: string;
    description: string;
    html_url: string;

    language: string;
    stargazers_count: number;
    forks_count: number;
};

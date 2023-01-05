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
    }
    aptitudes: string[];
    description: string;
}

import React, { useState } from 'react';
import { Job } from '../types';
import { calculateDurationInYearsMonths, formatJobDate } from '../helpers';

type Props = {
    job: Job;
};

const JobTimelineItem = ({ job }: Props) => {
    const { title, company, period, location, aptitudes, description } = job;

    const [showDescription, setShowDescription] = useState(false);

    const showFullDescription = () => {
        return description;
    };

    const showShortDescription = () => {
        return description.length > 160 ? description.substring(0, 160) + '...' : description;
    };

    return (
        <div className="row g-0">
            <div className="col-auto timeline">
                <span className="bullet" />
                <span className="v-line" />
            </div>
            <div className="col ms-3 timeline-box">
                {/*<hr/>*/}
                <h3 className="timeline-title">{title}</h3>
                <h4 className="timeline-company">
                    <a
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                    >
                        {company.name}
                    </a>
                    <span className="timeline-period">
                        {' '}
                        | {formatJobDate(period.from)} - {formatJobDate(period.to)} ·{' '}
                        {calculateDurationInYearsMonths(period.from, period.to)}
                    </span>
                    <span className="timeline-location"> | {location}</span>
                </h4>
                <div className="timeline-aptitudes">
                    {aptitudes.map((aptitude: string, index: number) => (
                        <span className="badge bg-secondary border-primary me-1 mb-1" key={index}>
                            {aptitude}
                        </span>
                    ))}
                </div>
                {description.length > 0 && (
                    <p className="timeline-description mt-2">
                        {showDescription ? showFullDescription() : showShortDescription()}
                        <span
                            className="text-primary link-more"
                            onClick={() => setShowDescription(!showDescription)}
                        >
                            {showDescription ? ' Ver menos -' : ' Ver más +'}
                        </span>
                    </p>
                )}
                <br />
            </div>
        </div>
    );
};

export default JobTimelineItem;

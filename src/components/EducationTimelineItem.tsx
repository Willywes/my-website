import React, { useState } from 'react';
import { Education } from '../types';
import { calculateDurationInYearsMonths, formatJobDate } from '../helpers';

type Props = {
    education: Education;
};

const EducationTimelineItem = ({ education }: Props) => {
    const { title, institution, period, location, description } = education;

    const [showDescription, setShowDescription] = useState(false);

    const showFullDescription = () => {
        return description;
    };

    const showShortDescription = () => {
        if (description) {
            return description.length > 160 ? description.substring(0, 160) + '...' : description;
        }
    };

    return (
        <div className="row g-0">
            <div className="col-auto timeline">
                <span className="bullet" />
                <span className="v-line" />
            </div>
            <div className="col ms-3 timeline-box">
                <h3 className="timeline-title">{title}</h3>
                <h4 className="timeline-company">
                    <a
                        href={institution.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                    >
                        {institution.name}
                    </a>
                    <span className="timeline-period">
                        {' '}
                        | {formatJobDate(period.from)} - {formatJobDate(period.to)} ·{' '}
                        {calculateDurationInYearsMonths(period.from, period.to)}
                    </span>
                    <span className="timeline-location"> | {location}</span>
                </h4>
                {description && description.length > 0 && (
                    <p className="timeline-description mt-2">
                        {showDescription ? showFullDescription() : showShortDescription()}
                        <span
                            className="text-primary"
                            onClick={() => setShowDescription(!showDescription)}
                            style={{
                                cursor: 'pointer',
                                fontSize: '0.8rem'
                            }}
                        >
                            {showDescription ? ' Ver menos -' : ' Ver más +'}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default EducationTimelineItem;

import React, { useState } from 'react';
import { Certification } from '../types';
import { formatJobDate } from '../helpers';

type Props = {
    certification: Certification;
};

const CertificationTimelineItem = ({ certification }: Props) => {
    const { title, institution, description, date } = certification;

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
                    <a href={institution.url} target="_blank" rel="noreferrer">
                        {institution.name}
                    </a>
                    <span className="timeline-period"> | {formatJobDate(date)}</span>
                </h4>
                <p>
                    Código de verificación{' '}
                    <span className="badge bg-secondary border-primary">{institution.code}</span>
                </p>
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
                <br />
            </div>
        </div>
    );
};

export default CertificationTimelineItem;

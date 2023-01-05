import React, {useState} from 'react';
import {Job} from "../types";
import {calculateDurationInYearsMonths, formatJobDate} from "../helpers";

type Props = {
    job: Job;
}

const JobTimelineItem = ({job}: Props) => {

    const {title, company, period, location, aptitudes, description} = job;

    const [showDescription, setShowDescription] = useState(false);

    const showFullDescription = () => {
        return description;
    }

    const showShortDescription = () => {
        return description.length > 200 ? description.substring(0, 200) + '...' : description;
    }

    return (
        <div className="row g-0">

            <div className="col-auto timeline">
                <span className="bullet"/>
                <span className="v-line"/>
            </div>
            <div className="col ms-3 job-box">
                {/*<hr/>*/}
                <h3 className="job-title">{title}</h3>
                <h4 className="job-company-name">
                    <a href={company.url} target="_blank" rel="noreferrer">{company.name}</a>
                    <span className="job-period"> | {formatJobDate(period.from)} - {formatJobDate(period.to)} · {calculateDurationInYearsMonths(period.from, period.to)}</span>
                    <span className="job-location"> | {location}</span>
                </h4>
                <div className="job-aptitudes">
                    {
                        aptitudes.map((aptitude: string, index: number) => (
                            <span className="badge bg-primary bg-soft me-1 mb-1" key={index}>{aptitude}</span>
                        ))
                    }
                    {/*Innovación tecnológica · Startup de tecnología · Liderazgo de equipos · Arquitectura de software*/}
                    {/*· Desarrollo de software*/}
                </div>
                {/*hacer que el texto se corte a los 100 caracteres y tenga un ver mas para mostrar el resto del texto*/}

                <p className="job-description mt-2">
                    {showDescription ? showFullDescription() : showShortDescription()}
                    <span className="text-primary" onClick={() => setShowDescription(!showDescription)} style={{
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                    }}>
                         {showDescription ? ' Ver menos -' : ' Ver más +'}
                    </span>
                </p>
                <br/>
            </div>
        </div>
    );
};

export default JobTimelineItem

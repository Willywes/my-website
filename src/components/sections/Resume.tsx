import React from 'react';
import JobTimelineItem from '../JobTimelineItem';
import {certifications, educations, jobs} from '../../data';
import EducationTimelineItem from '../EducationTimelineItem';
import CertificationTimelineItem from '../CertificationTimelineItem';

const Resume = () => {
    return (
        <>
            {/*<h2>Resumen</h2>*/}
            <h2>Experiencia Profesional</h2>
            {jobs.map((job, index) => (
                <JobTimelineItem job={job} key={index + 10}/>
            ))}
            <br/>
            <br/>
            <h2>Formación Académica</h2>
            {educations.map((education, index) => (
                <EducationTimelineItem education={education} key={index + 10}/>
            ))}

            <br/>
            <br/>
            <h2>Certificaciones</h2>
            {certifications.map((certification, index) => (
                <CertificationTimelineItem certification={certification} key={index + 10}/>
            ))}
        </>
    );
};

export default Resume;

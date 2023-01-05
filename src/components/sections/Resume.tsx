import React from 'react';
import JobTimelineItem from "../JobTimelineItem";
import {jobs} from "../../data";

const Resume = () => {
    return (
        <>
            <h2>Resumen</h2>
            <h3>Experiencia Profesional</h3>
            {
                jobs.map((job, index) => (
                    <JobTimelineItem job={job} key={index + 10}/>
                ))
            }

        </>
    );
};

export default Resume

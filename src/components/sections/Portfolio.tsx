import React from 'react';
import { Repository } from '../../types';
import RepositoryCard from '../RepositoryCard';

type Props = {
    repositories: Repository[];
};
const Portfolio = ({ repositories }: Props) => {
    return (
        <>
            <h2>Repositorios</h2>
            <div className="row">
                {repositories?.map((repository, index) => (
                    <RepositoryCard repository={repository} key={index} />
                ))}
            </div>
            <br />
            <br />
        </>
    );
};

export default Portfolio;

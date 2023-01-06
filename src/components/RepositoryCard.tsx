import React from 'react';
import { Repository } from '../types';

type Props = {
    repository: Repository;
};

const RepositoryCard = ({ repository }: Props) => {
    const filtered = [
        'w2-rut-validator',
        'agora-sdk-php',
        'ApiResponse',
        'ProyectoKIRA',
        'chilean-rut-php',
        'Basic-Video-Call',
        'willywes-site'
    ];

    const { name, description, html_url } = repository;

    if (!filtered.includes(name)) {
        return null;
    }

    return (
        <div className="col-md-6">
            <div className="card card-repository">
                <div className="card-body">
                    <h5 className="card-title">
                        <a
                            href={html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none"
                        >
                            {name}
                        </a>
                    </h5>
                    <p className="card-text">
                        {description?.length > 160
                            ? description.substring(0, 160) + '...'
                            : description}
                    </p>
                </div>
                {/*<div className="card-footer">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col d-flex">*/}
                {/*            <div className="card-date my-auto"></div>*/}
                {/*        </div>*/}
                {/*        <div className="col-auto text-end d-flex">*/}
                {/*            <a*/}
                {/*                href={html_url}*/}
                {/*                target="_blank"*/}
                {/*                rel="noreferrer"*/}
                {/*                className="btn btn-more my-auto px-4"*/}
                {/*            >*/}
                {/*                Ver más*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default RepositoryCard;

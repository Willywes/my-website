import React from 'react';
import SocialMedia from './SocialMedia';

const ProfileCard = () => {
    return (
        <div className="card card-profile">
            <div className="card-body">
                <img src="/profile.png" alt="Willywes" className="avatar pulse" />
                <h1 className="name">Alejandro Isla C.</h1>
                <p className="title">Ingeniero de Software</p>
                <SocialMedia />
            </div>
        </div>
    );
};

export default ProfileCard;

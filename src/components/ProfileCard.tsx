import React, { useState } from 'react';
import SocialMedia from './SocialMedia';

const ProfileCard = () => {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 1000);
    }

    return (
        <div className="card card-profile">
            <div className="card-body">
                <img
                    src="/profile.png"
                    alt="Willywes"
                    className={`avatar ${active ? 'pulse' : ''}`}
                    onClick={() => {
                        setActive(false);
                        handleClick();
                    }}
                    onMouseEnter={() => setActive(true)}
                    onMouseOver={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                />
                <h1 className="name">Alejandro Isla C.</h1>
                <p className="title">Ingeniero de Software</p>
                <SocialMedia />
            </div>
        </div>
    );
};

export default ProfileCard;

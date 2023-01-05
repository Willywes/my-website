import React from 'react';
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import avatar from '../assets/images/willywes.png';

const ProfileCard = () => {
    return (
        <div className="card card-profile">
            <div className="card-body">
                <img src="/willywes.png" alt="Willywes" className="avatar"/>
                <h1 className="name">Alejandro Isla C.</h1>
                <p className="title">Ingeniero de Software</p>
                <SocialMedia/>
            </div>
        </div>
    );
};

export default ProfileCard

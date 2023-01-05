import React from 'react';
// import {IoLogoGithub, IoLogoLinkedin, IoLogoStackoverflow, IoLogoWebComponent} from "react-icons/io5";
import linkedin from '../assets/images/icons/linkedin.svg';
import github from '../assets/images/icons/github.svg';
import stackoverflow from '../assets/images/icons/stackoverflow.svg';
import spotify from '../assets/images/icons/spotify.svg';
import Image from "next/image";

const SocialMedia = () => {
    return <div className="social-media">
        <a className="social-media-icon" target="_blank" rel="noreferrer"
           href="https://www.linkedin.com/in/willywes/">
            <Image src={linkedin} width={32} height={32} alt="Linkedin - Alejandro Isla"/>
        </a>
        <a className="social-media-icon" target="_blank" rel="noreferrer"
           href="https://github.com/willywes">
            <Image src={github} width={32} height={32} alt="Github - Alejandro Isla"/>
        </a>
        <a className="social-media-icon" target="_blank" rel="noreferrer"
           href="https://es.stackoverflow.com/users/2500/willywes">
            <Image src={stackoverflow} width={32} height={32} alt="Stackoverflow - Alejandro Isla"/>
        </a>
        <a className="social-media-icon" target="_blank" rel="noreferrer"
           href="https://open.spotify.com/user/willywescl">
            <Image src={spotify} width={32} height={32} alt="Spotify - Alejandro Isla"/>
        </a>
        {/*<a className="social-media-icon" target="_blank" rel="noreferrer"*/}
        {/*   href="https://medium.com">*/}
        {/*    <IoLogoWebComponent/>*/}
        {/*</a>*/}
    </div>
};

export default SocialMedia

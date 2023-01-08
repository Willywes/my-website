import React from 'react';
import { Section } from '../../types';

type Props = {
    tabs: Section[];
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
};
const Navigation = ({ tabs, activeTab, setActiveTab }: Props) => {

    return (
        <>
            <ul
                id="tabs-menu"
                className="tabs-menu mb-3 nav-tabs-custom nav-justified nav nav-tabs"
            >
                {tabs.map((tab, index) => (
                    <li key={index} className={`nav-item ${activeTab == tab.id ? 'active' : ''}`}>
                        <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`nav-link ${activeTab == tab.id ? 'active' : ''}`}
                        >
                            <span className=" d-sm-block">{tab.title}</span>
                        </button>
                    </li>
                ))}
            </ul>


            <div id="mobile-menu">

            </div>
        </>
    );
};

export default Navigation;

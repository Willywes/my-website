import React, { useState } from 'react';
import { Section } from '../../types';
import { Offcanvas } from 'react-bootstrap';

type Props = {
    tabs: Section[];
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
};
const Navigation = ({ tabs, activeTab, setActiveTab }: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    // useEffect(() => {
    //     if(showMenu) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "unset";
    //     }
    // },  [showMenu]);

    const handleShow = (tab: string) => {
        setActiveTab(tab);
        setShowMenu(false);
        setTimeout(() => {
            window.scroll({
                top: 500,
                left: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

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
                <button
                    className={`btn btn-menu pulse ${showMenu ? 'active' : ''}`}
                    onClick={handleShowMenu}
                >
                    <div className="icon-menu">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </button>

                <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="bottom">
                    <Offcanvas.Body>
                        <div className="row">
                            <div className="col-12 p-5">
                                <ul className="nav nav-mobile flex-column">
                                    {tabs.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={`nav-item ${
                                                activeTab == tab.id ? 'active' : ''
                                            }`}
                                        >
                                            <div
                                                onClick={() => handleShow(tab.id)}
                                                className={`nav-link ${
                                                    activeTab == tab.id ? 'active' : ''
                                                }`}
                                            >
                                                <span className="">{tab.title}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
};

export default Navigation;

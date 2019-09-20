import React from 'react';

import './MainHeader.scss';
import{ NavLink } from 'react-router-dom';

import logo from "./../../assets/images/logo.png"

const MainHeader = () => {
    return (
        <header className="MainHeader">
            <header className="SecondaryHeader">
                <div className="Contact">
                    Contacto
                </div>
                <div className="Social-Translation">
                    <div className="Social">
                        Social
                    </div>
                    <div className="Translation">
                        Translation
                    </div>
                </div>
            </header>
            <header className="PrimaryHeader">
                <div className="Logo">
                    <img src={logo} alt=""/>
                </div>
                <nav className="MainMenu">
                    <ul>
                        <li>
                            <NavLink exact to="/uno">
                                Menu 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/uno">
                                Menu 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/uno">
                                Menu 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/uno">
                                Menu 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/uno">
                                Menu 1
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </header>
    )
}

export default MainHeader;
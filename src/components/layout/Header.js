import React from "react";
import {FaPizzaSlice} from 'react-icons/fa';

export const Header = () => {
    const x = 1;
    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/image/logo.png" alt="Todoinst" />
            </div>
            <div className="setting">
                <ul>
                    <li data-testid="quick-add-task-action" className="setting__add">+</li>
                    <li data-testid="dark-mode-action" className="setting__darkmode">
                        <FaPizzaSlice />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
};
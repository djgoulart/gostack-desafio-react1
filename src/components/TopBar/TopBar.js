import React from 'react';

import './TopBar.css';
import facebookImg from './../../assets/facebook.png'

function TopBar() {
    return(
        <div className="topbar">
            <div className="container">
                <img width="120.92" src={facebookImg} alt="Facebook" />
                <a href="#">Meu Perfil <i className="material-icons">account_circle</i></a>
            </div>
        </div>
    );

}

export default TopBar;
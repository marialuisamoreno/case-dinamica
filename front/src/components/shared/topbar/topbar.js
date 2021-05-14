import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";
import './topbar.css';
import { localUsername } from "../../services/auth";
import DownloadMenu from '../buttons/downloadMenu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { baseFrontURL } from '../../services/api';

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.logoutClick = this.logoutClick.bind(this);
    }

    render() {
        return (
            <div className='topbar'>

                <div className='logo'></div>
                
                <div className="textWelcome">
                    Welcome, {localUsername()}
                </div>                

                <div className="textToolName">
                    Product Catalog
                </div>
                
                {/*
                <div className="downloadMenu">
                    <DownloadMenu/>                    
                </div>
                */}
                
            </div>
        );
    }
}

export default withRouter(Topbar);
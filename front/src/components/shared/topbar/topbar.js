import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './topbar.css';
import { localUsername } from "../../services/auth";

class Topbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='topbar'>

                <div className='logo'></div>
                
                <div className="textWelcome">
                    Welcome, {localUsername()}
                </div>                

                <div className="textToolName">
                    Dinamica Case
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
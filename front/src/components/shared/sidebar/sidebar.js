import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import '../../../assets/custom/bootstrap.css';
import './sidebar.css';
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';

class Sidebar extends Component {
  render(){
    const { pathname } = this.props.location;
    var pj = require('./../../../../package.json');
    return (
      <div>
        <SideNav          
          onSelect={(selected) => {
            const to = '/' + selected;
            this.props.history.push(to);
            }}
        >
          <ReactTooltip/>
          <SideNav.Nav 
            className ='sidenav---sidenav---_2tBP'>
              <NavItem data-tip="ADM" eventKey="products" className ={pathname.match('/products') ? 'sidenav---sidenav-navitem---uwIJ- sidenav---selected---1EK3y sidenav---highlighted---oUx9u': ''}>
                  <NavIcon>
                    <i className="icofont-document-folder font-sidebar"></i>
                  </NavIcon>
                </NavItem>
              <NavItem data-tip="CLIENT" eventKey="client" className ={pathname.match('/client') ? 'sidenav---sidenav-navitem---uwIJ- sidenav---selected---1EK3y sidenav---highlighted---oUx9u': ''}>
                  <NavIcon>
                    <i className="icofont-tools-alt-2 font-sidebar"></i>
                  </NavIcon>
              </NavItem>
          </SideNav.Nav>          
          <div style={{position:'absolute', bottom:'55px', marginLeft:'4px',zIndex:'8000'}}>
            <p
              style={{fontSize:'10px', color:'grey'}}
            >
              V.{pj.version}
            </p>
          </div>
      </SideNav>      
    </div>
    );
  }
}

export default withRouter(Sidebar);


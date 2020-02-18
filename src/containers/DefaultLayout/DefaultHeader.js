import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import bwest from '../../assets/img/brand/bwest.jpg';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: bwest, width: 155, height: 55, alt: 'bwest Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'bwest Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink to="" className="nav-link" >user</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="" className="nav-link" >Add Product</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="" className="nav-link">Add testimonies</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="" className="nav-link">Products</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="" className="nav-link">Owners</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="" className="nav-link">Search</Link>
          </NavItem>
        
        </Nav>
        <Nav className="ml-auto" navbar>
         
          
         
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
             <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              
          
             
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;

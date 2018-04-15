import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class NavMenu extends React.Component {
    render() {
        return <div className='top-nav'>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink exact to={'/'} activeClassName='active'>
                            <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <li>
                        <NavLink exact to={'/participants'} activeClassName='active'> Participants </NavLink>
                    </li>
                    
                    
                </Nav>
               
            </Navbar>
        </div>;
    }
}

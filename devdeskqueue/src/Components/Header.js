import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Heading = styled.header`
    background: red;
    top: 0;
    width: 100%;
    z-index: 999;   

`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    height: 100px;
`

const NavMenu = styled.div`
    a{
        color: #FFF;
        font-weight: bold;
        font-size: 1.6rem;
        padding: 39px;
       
     &:hover{
        color: #FFF;
        background: lightgrey;
    }    
  }
`

const Header = () => {
    return (
      <Heading>
        <Nav>
           <h1>DevDesk Queue</h1>   
          <NavMenu className="nav">
            <Link to="">Home</Link>            
            <Link to="/Logout">Logout</Link>
          </NavMenu>
        </Nav>
      </Heading>
    )
  }
  
  export default Header;
  
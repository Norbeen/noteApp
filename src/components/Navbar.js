import React from 'react';
import Home from '../components/Home';
import Memories from '../components/Memories';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <NavStyled >
            
            <div className="logo">
                <h1><Link to="/" className="link">Memo</Link></h1>
            </div>
            
            <ul>
                <li>
                <Link to="/Home" className="link">About</Link>
                </li>


                <li>
                <Link to="/Memories" className="link">Memories</Link>
                </li>


            </ul>
        </NavStyled >
    )
}

const NavStyled = styled.div`

display:flex;
justify-content:space-between;
font-weight:bold;
/* background-color:#4267B2; */
background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
min-height:8vh;
padding:10px;

.link{
    text-decoration:none;
    color:white;
    font-weight:bold;
}


ul{
    display:flex;
    justify-content:space-around;
    width:30%;
    list-style:none;

   
    
}

/* 
h1 {
    margin-top:5px;
} */
`



export default Navbar;


import React  from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import ContactsTwoToneIcon from '@material-ui/icons/ContactsTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';


const NavBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                
                <li><Link to="/"><ContactsTwoToneIcon></ContactsTwoToneIcon></Link></li>
                <li><Link to="/add"><AddCircleTwoToneIcon></AddCircleTwoToneIcon></Link></li>
                <li className="search"><SearchTwoToneIcon></SearchTwoToneIcon></li>
                <li><input placeholder="Поиск"></input></li>
                
            </ul>
            
        </div>
    )
}
export default NavBar;



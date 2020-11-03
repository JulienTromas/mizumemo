import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
           <NavLink to="/select">Select a plant</NavLink>
           <NavLink to="/collection">My collection</NavLink>
        </div>
     );
}

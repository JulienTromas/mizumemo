import React from "react";
import "../styles/navbar.css";
import UserCollection from "./UserCollection";
import { NavLink } from 'react-router-dom';
import {db} from "../services/firebase"

export default function Navbar(props) {

  return (
    <>      
<div>
  <div id="navBar" className="navbar">
    <NavLink to="/Home">
      <button className="navbar-header">Home</button>
    </NavLink>
    <NavLink to="/Select">
      <button id="select-plant" className="navbar-header">Select a plant</button>
    </NavLink>
    <NavLink to="/Collection">
            <button
            id="plant-collection"
            className="navbar-header">
            My collection
            </button>
        </NavLink>
      </div>
      </div>
    </>
  );
}

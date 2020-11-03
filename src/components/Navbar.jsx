import React, {useState} from "react";
import "../styles/navbar.css";
import UserCollection from "./UserCollection";
import { BrowserRouter,NavLink } from 'react-router-dom';
import {db} from "../services/firebase"
// import { saveObject } from "../utils/index.js";

export default function Navbar(props) {


  return (
    <>      
<div>

    <div id="navBar" className="navbar">
        <NavLink to="/select">
            <button
            id="select-plant"
            className="navbar-header">
            Select a plant
            </button>
        </NavLink>
        <NavLink to="/collection">
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
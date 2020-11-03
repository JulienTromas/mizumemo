import React, { useState, useEffect, Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Signup from './Signup'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
import SelectPlant from "./SelectPlant"
import UserCollection from "./UserCollection"
import Navigation from "./Navigation"


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/select" component={SelectPlant}/>
             <Route path="/collection" component={UserCollection}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    {/* <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight:"100vh"}}>
          <div className="w-100" style={{maxWidth: '400px'}}>
            <Signup />
          </div>
      </Container>
    </AuthProvider> */}
    </>
  );
}

export default App;

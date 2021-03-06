import React, { useState, useEffect, Component,render } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import {Container} from 'react-bootstrap'
import SelectPlant from "./SelectPlant"
import UserCollection from "./UserCollection"
import AddPlant from "./AddPlant"
import Navbar from "./Navbar";
import Home from "./Home";
import firebase from '../services/firebase'


function App() {

  const [plants, setPlants] = useState([]);
  const refPlants = firebase.firestore().collection("plants");

  const [userPlants, setUserPlants] = useState([]);
  const refUserPlants = firebase.firestore().collection("userPlants");

  const [addPlant, setAddPlant] = useState([]);

  function getPlants(){
    refPlants.onSnapshot((querySnapshot) => {
      const plants = [];
      querySnapshot.forEach((doc) => {
        plants.push(doc.data());
      })
      setPlants(plants)
    })
  }

  function getUserPlants(){
    refUserPlants.onSnapshot((querySnapshot) => {
      const userPlants = [];
      querySnapshot.forEach((doc) => {
        userPlants.push(doc.data());
      })
      setUserPlants(userPlants)
    })
  }
  console.log(plants);
  console.log(userPlants);
  useEffect(()=>{
    getPlants();
    getUserPlants();
  },[]);

  return (
    <>

      <BrowserRouter>
      <div>
      <Navbar />
            <Switch>
             <Route path="/Home" render={() => <Home/>} />
             <Route path="/Select" render={() => <SelectPlant plants={plants} setAddPlant={setAddPlant} />} />
             <Route path="/Collection" render={() => <UserCollection userPlants={userPlants} />} />
             <Route path="/AddPlant" render={() => <AddPlant  addPlant={addPlant} setAddPlant={setAddPlant}/>} />
           </Switch>
        </div> 
      </BrowserRouter>

    </>
  );
}

export default App;

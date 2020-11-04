import React, { useState, useEffect, Component,render } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Signup from './Signup'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
import SelectPlant from "./SelectPlant"
import UserCollection from "./UserCollection"
import AddPlant from "./AddPlant"
import Navbar from "./Navbar";
// import {db} from '../services/firebase'
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
             {/* <Route path="/Home" render={() => <SelectPlant plants={plants} setAddPlant={setAddPlant} />} />  */}
             <Route path="/Select" render={() => <SelectPlant plants={plants} setAddPlant={setAddPlant} />} />
             <Route path="/Collection" render={() => <UserCollection userPlants={userPlants} />} />
             <Route path="/AddPlant" render={() => <AddPlant  addPlant={addPlant} setAddPlant={setAddPlant}/>} />
             {/* <Route path="/About" render={() => <AddPlant  addPlant={addPlant} setAddPlant={setAddPlant}/>} />
             <Route path="/Login" render={() => <AddPlant  addPlant={addPlant} setAddPlant={setAddPlant}/>} />
             <Route path="/SignUp" render={() => <AddPlant  addPlant={addPlant} setAddPlant={setAddPlant}/>} /> */}
           </Switch>
        </div> 
        <div>
          {/* Insert login area */}
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;


    // {/* <AuthProvider>
    //   <Container className="d-flex align-items-center justify-content-center"
    //     style={{minHeight:"100vh"}}>
    //       <div className="w-100" style={{maxWidth: '400px'}}>
    //         <Signup />
    //       </div>
    //   </Container>
    // </AuthProvider> */}
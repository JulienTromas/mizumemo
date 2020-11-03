import React, { useState, useEffect, Component,render } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Signup from './Signup'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
import SelectPlant from "./SelectPlant"
import UserCollection from "./UserCollection"
import Navbar from "./Navbar";
// import {db} from '../services/firebase'
import firebase from '../services/firebase'


function App() {

  const [plants, setPlants] = useState([]);
  const refPlants = firebase.firestore().collection("plants");

  function getPlants(){
    refPlants.onSnapshot((querySnapshot) => {
      const plants = [];
      querySnapshot.forEach((doc) => {
        plants.push(doc.data());
      })
      setPlants(plants)
    })
  }
  console.log(plants);
  useEffect(()=>{
    getPlants();
  },[]);

  // const [currentPage, setCurrentPage] = useState('Select a plant');
  return (
    <>

      <BrowserRouter>
      <div>
      <Navbar />
            <Switch>
             <Route path="/select" render={() => <SelectPlant plants={plants} />} />
             <Route path="/collection" component={UserCollection}/>
           </Switch>
        </div> 
        <div>

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
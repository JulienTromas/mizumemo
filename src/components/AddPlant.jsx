import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import firebase from '../services/firebase'
import { v4 as uuidv4 } from "uuid";
import { NavLink } from 'react-router-dom';
import '../styles/AddPlant.css';

export default function AddPlant(props) {

    const [plantsurname, setPlantsurname] = useState("");

    function addUserPlant(plant) {
        firebase.firestore().collection("userPlants")
          .doc(plant.id)
          .set(plant)
          .catch((err) => {
            console.error(err);
          });
      }
        
    return (
        <>
        <h1 class="text-center">Add a new plant to your collection</h1>
      <div className="inputBox">
        <h3 class="text-center">Give a surname to your new plant!</h3>
        <input
          class="inputField"
          type="text"
          value={plantsurname}
          onChange={(e) => setPlantsurname(e.target.value)}
        />
        <NavLink to="/Collection">
        <button id="inputButton" class="btn btn-primary" variant="primary" onClick={() => addUserPlant({
            plantsurname: plantsurname,
            id: uuidv4(),
            commonName: props.addPlant.commonName,
            scientificName: props.addPlant.scientificName,
            recommendedLight: props.addPlant.recommendedLight,
            recommendedWater: props.addPlant.recommendedWater,
            waterDelay: props.addPlant.waterDelay,
            waterAgo: 0,
            ownedBy1:'JTromas'
        })}>
          Submit
        </button>
        </NavLink>
        
      </div>
      </>
    )
}

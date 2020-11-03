import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import firebase from '../services/firebase'
import { v4 as uuidv4 } from "uuid";
import { NavLink } from 'react-router-dom';

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
        <h1>Add a new plant to your collection</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <input
          type="text"
          value={plantsurname}
          onChange={(e) => setPlantsurname(e.target.value)}
        />
        <NavLink to="/Collection">
        <button onClick={() => addUserPlant({
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
        {/* <Card>
          <Card.Body>
            <h2 className= "text-center mb-4">Add a plant</h2>
            <Form>
                <Form.Group controlId="formPlantSurname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" placeholder="Enter your plant's nickname" />
                <Form.Text className="text-muted">
                Give a nickname to your new green companion
                </Form.Text>
                </Form.Group>
                <div class="card" style={{width: '18rem'}}>
                      <div class="card-header text-center">
                      <h5 class="card-title "><b>{props.addPlant.commonName}</b></h5>
                        <p class="card-text"><em>{props.addPlant.scientificName}</em></p>
                        </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center"><b>Light:</b><br></br> {props.addPlant.recommendedLight}</li>
                        <li class="list-group-item text-center"><b>Water:</b><br></br> {props.addPlant.recommendedWater}</li>
                    </ul> 

                </div>

  <Button variant="primary" type="submit" onClick={() => addUserPlant({ plantsurname, desc, id: uuidv4() })}>
    Add to collection
  </Button>
</Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? Log In
        </div> */}
      </>
    )
}
